
const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservaControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la reserva
 *         hotel:
 *           type: string
 *           description: Nombre del hotel
 *         fecha:
 *           type: string
 *           format: date
 *           description: Fecha de la reserva
 *         tipo_habitacion:
 *           type: string
 *           description: Tipo de habitación reservada
 *         estado:
 *           type: string
 *           description: Estado de la reserva
 *         num_huespedes:
 *           type: integer
 *           description: Número de huéspedes
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener lista de reservas
 *     description: Devuelve una lista de todas las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/reservas', reservasController.obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener información de una reserva específica
 *     description: Devuelve una reserva específica por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva obtenida
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/reservas/:id', reservasController.obtenerReserva);

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     description: Crea una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 */
router.post('/reservas', reservasController.crearReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva
 *     description: Actualiza una reserva existente por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/reservas/:id', reservasController.actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     description: Elimina una reserva existente por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       204:
 *         description: Reserva eliminada
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/reservas/:id', reservasController.eliminarReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Filtrar reservas
 *     description: Filtra reservas por diferentes criterios
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Filtrar por hotel
 *       - in: query
 *         name: fecha_inicio
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtrar por rango de fechas (inicio)
 *       - in: query
 *         name: fecha_fin
 *         schema:
 *           type: string
 *           format: date
 *         description: Filtrar por rango de fechas (fin)
 *       - in: query
 *         name: tipo_habitacion
 *         schema:
 *           type: string
 *         description: Filtrar por tipo de habitación
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Filtrar por estado
 *       - in: query
 *         name: num_huespedes
 *         schema:
 *           type: integer
 *         description: Filtrar por número de huéspedes
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 */
router.get('/reservas', reservasController.filtrarReservas);

module.exports = router;
