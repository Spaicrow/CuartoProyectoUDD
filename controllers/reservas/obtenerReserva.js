let reservas = require('../../data/reservasData');

const obtenerReserva = (req, res) => {
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (!reserva) return res.status(404).send('Reserva no encontrada');
  res.send(reserva);
};

module.exports = obtenerReserva;
