
// controllers/reservaControllers.js
const { readDataFromFile, writeDataToFile } = require('./fileOperations');

const obtenerReservas = (req, res) => {
  const reservas = readDataFromFile();
  res.json(reservas);
};

const obtenerReserva = (req, res) => {
  const reservas = readDataFromFile();
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (!reserva) {
    return res.status(404).json({ error: 'Reserva no encontrada' });
  }
  res.json(reserva);
};

const crearReserva = (req, res) => {
  const reservas = readDataFromFile();
  const nuevaReserva = {
    id: reservas.length ? reservas[reservas.length - 1].id + 1 : 1,
    ...req.body,
  };
  reservas.push(nuevaReserva);
  writeDataToFile(reservas);
  res.status(201).json(nuevaReserva);
};

const actualizarReserva = (req, res) => {
  const reservas = readDataFromFile();
  const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Reserva no encontrada' });
  }
  reservas[index] = { ...reservas[index], ...req.body };
  writeDataToFile(reservas);
  res.json(reservas[index]);
};

const eliminarReserva = (req, res) => {
  const reservas = readDataFromFile();
  const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Reserva no encontrada' });
  }
  reservas.splice(index, 1);
  writeDataToFile(reservas);
  res.status(204).send();
};

const filtrarReservas = (req, res) => {
  const reservas = readDataFromFile();
  const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;

  const filtered = reservas.filter(r => {
    return (!hotel || r.hotel === hotel) &&
           (!fecha_inicio || new Date(r.fecha) >= new Date(fecha_inicio)) &&
           (!fecha_fin || new Date(r.fecha) <= new Date(fecha_fin)) &&
           (!tipo_habitacion || r.tipo_habitacion === tipo_habitacion) &&
           (!estado || r.estado === estado) &&
           (!num_huespedes || r.num_huespedes === parseInt(num_huespedes));
  });

  res.json(filtered);
};

module.exports = {
  obtenerReservas,
  obtenerReserva,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
  filtrarReservas,
};
