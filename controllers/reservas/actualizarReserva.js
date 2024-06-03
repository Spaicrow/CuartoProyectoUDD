

const swaggerJSDoc = require('swagger-jsdoc');
let reservas = require('../../data/reservasData');

const actualizarReserva = (req, res) => {
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (!reserva) return res.status(404).send('Reserva no encontrada');

  Object.assign(reserva, req.body);
  res.send(reserva);
};

module.exports = actualizarReserva;
