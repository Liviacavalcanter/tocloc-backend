const express = require('express');
const AvailabilityService = require('../services/AvailabilityService');

const router = express.Router();
const availabilityService = new AvailabilityService();

// Rota para listar disponibilidades
router.get('/', async (req, res) => {
  try {
    const availabilities = await availabilityService.listAvailabilities();
    res.status(200).json(availabilities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para criar uma nova disponibilidade
router.post('/', async (req, res) => {
  try {
    const newAvailability = await availabilityService.registerAvailability(req.body);
    res.status(201).json(newAvailability);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para atualizar uma disponibilidade
router.put('/:id', async (req, res) => {
  try {
    const updatedAvailability = await availabilityService.updateAvailability(req.params.id, req.body);
    res.status(200).json(updatedAvailability);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar local esportivo: ' + err.message });
  }
});

// Rota para deletar uma disponibilidade
router.delete('/:id', async (req, res) => {
  try {
    await availabilityService.deleteAvalability(req.params.id);
    res.status(204).send(); // Não retorna corpo, apenas o status 204 de sucesso
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar local esportivo: ' + err.message });
  }
});

module.exports = router;
