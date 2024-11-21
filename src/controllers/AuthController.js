const express = require('express');
const AuthService = require('../services/AuthService');

const authService = new AuthService();

const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const token = await authService.loginUser({ email, senha });
    
    return res.status(200).json({ message: 'Login realizado com sucesso!', token });
  } catch (error) {
    console.error('Erro no login:', error.message);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
});


module.exports = router; 
