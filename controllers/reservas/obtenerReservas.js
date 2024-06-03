let reservas = require('../../data/reservasData');

const obtenerReservas = (req, res) => {
  res.send(reservas);
};

module.exports = obtenerReservas;
