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
router.get('/', async (req, res) => {
  try {
    const esportes = await sportsPlaceService.listarEsportes(); 
    res.status(200).json(esportes); 
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar esportes: ' + err.message });
  }
});

module.exports = router;

// Rota para atualizar um local esportivo
router.put('/:id', async (req, res) => {
  try {
    const updatedPlace = await sportsPlaceService.updateSportsPlace(req.params.id, req.body);
    res.status(200).json(updatedPlace);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar local esportivo: ' + err.message });
  }
});

// Rota para deletar um local esportivo
router.delete('/:id', async (req, res) => {
  try {
    await sportsPlaceService.deleteSportsPlace(req.params.id);
    res.status(204).send(); // Não retorna corpo, apenas o status 204 de sucesso
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar local esportivo: ' + err.message });
  }
});

module.exports = router;
