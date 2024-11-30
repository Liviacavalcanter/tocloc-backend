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

// Rota para listar reservas com detalhes
router.get('/details', async (req, res) => {
  try {
    const reservationsWithDetails = await reservationService.getAllReservationsWithDetails();
    res.status(200).json(reservationsWithDetails);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar reservas com detalhes: ' + err.message });
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

// Rota para atualizar uma reserva
router.put('/:id', async (req, res) => {
  try {
    const updatedReservation = await reservationService.updateReservation(req.params.id, req.body);
    res.status(200).json(updatedReservation);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar reserva: ' + err.message });
  }
});


// Rota para deletar uma reserva
router.delete('/:id', async (req, res) => {
  try {
    await reservationService.deleteReservation(req.params.id);
    res.status(204).send(); // Não retorna corpo, apenas o status 204 de sucesso
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar local esportivo: ' + err.message });
  }
});



module.exports = router;
