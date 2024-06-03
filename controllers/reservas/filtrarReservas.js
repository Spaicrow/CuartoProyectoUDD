let reservas = require('../../data/reservasData');

const filtrarReservas = (req, res) => {
  let resultado = reservas;
  if (req.query.hotel) {
    resultado = resultado.filter(r => r.hotel === req.query.hotel);
  }
  if (req.query.fecha_inicio && req.query.fecha_fin) {
    resultado = resultado.filter(r => new Date(r.fecha) >= new Date(req.query.fecha_inicio) && new Date(r.fecha) <= new Date(req.query.fecha_fin));
  }
  if (req.query.tipo_habitacion) {
    resultado = resultado.filter(r => r.tipo_habitacion === req.query.tipo_habitacion);
  }
  if (req.query.estado) {
    resultado = resultado.filter(r => r.estado === req.query.estado);
  }
  if (req.query.num_huespedes) {
    resultado = resultado.filter(r => r.num_huespedes === parseInt(req.query.num_huespedes));
  }
  res.send(resultado);
};

module.exports = filtrarReservas;

