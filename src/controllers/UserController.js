const express = require('express');
const UserService = require('../services/UserService');

const router = express.Router();
const userService = new UserService();

// Rota para listar usuários
router.get('/', async (req, res) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para criar um usuário
router.post('/', async (req, res) => {
  try {
    const newUser = await userService.registerUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
