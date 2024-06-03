let reservas = require('../../data/reservasData');

const eliminarReserva = (req, res) => {
  const reservaIndex = reservas.findIndex(r => r.id === parseInt(req.params.id));
  if (reservaIndex === -1) return res.status(404).send('Reserva no encontrada');

  const reservaEliminada = reservas.splice(reservaIndex, 1);
  res.send(reservaEliminada);
};

module.exports = eliminarReserva;
