const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

router.post('/reservas', reservasController.crearReserva);
router.get('/reservas', reservasController.obtenerReservas);
router.get('/reservas/:id', reservasController.obtenerReserva);
router.put('/reservas/:id', reservasController.actualizarReserva);
router.delete('/reservas/:id', reservasController.eliminarReserva);
router.get('/reservas', reservasController.filtrarReservas);

module.exports = router;

