let reservas = require('../../data/reservasData');

const crearReserva = (req, res) => {
  const nuevaReserva = req.body;
  nuevaReserva.id = reservas.length + 1;
  reservas.push(nuevaReserva);
  res.status(201).send(nuevaReserva);
};

module.exports = crearReserva;
