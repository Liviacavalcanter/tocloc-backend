const express = require('express');
const SportsPlaceService = require('../services/SportsPlaceService');

const router = express.Router();
const sportsPlaceService = new SportsPlaceService();

// Rota para listar locais esportivos
router.get('/', async (req, res) => {
  try {
    const places = await sportsPlaceService.listSportsPlaces();
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para criar um novo local esportivo
router.post('/', async (req, res) => {
  try {
    const newPlace = await sportsPlaceService.registerSportsPlace(req.body);
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;