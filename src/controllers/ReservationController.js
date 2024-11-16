const express = require('express');
const ReservationService = require('../services/ReservationService');

const router = express.Router();
const reservationService = new ReservationService();

// Rota para listar reservas
router.get('/', async (req, res) => {
  try {
    const reservations = await reservationService.listReservations();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para criar uma nova reserva
router.post('/', async (req, res) => {
  try {
    const newReservation = await reservationService.registerReservation(req.body);
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
