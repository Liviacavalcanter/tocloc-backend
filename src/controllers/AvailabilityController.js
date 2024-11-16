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

module.exports = router;
