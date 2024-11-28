const express = require('express');
const SportsPlaceService = require('../services/SportsPlaceService');
const router = express.Router();
const sportsPlaceService = new SportsPlaceService();

// Rota para criar um novo local esportivo
router.post('/', async (req, res) => {
  try {
    const newPlace = await sportsPlaceService.registerSportsPlace(req.body);
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para listar esportes
router.get('/esportes', async (req, res) => {
  try {
    const esportes = await sportsPlaceService.listarEsportes(); 
    res.status(200).json(esportes); 
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar esportes: ' + err.message });
  }
});

module.exports = router;
