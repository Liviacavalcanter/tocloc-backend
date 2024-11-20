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
router.post("/", async (req, res) => {
  console.log("Dados recebidos na rota:", req.body); // Log dos dados recebidos
  const { nome, email, senha, tipo } = req.body;

  // Validação dos dados recebidos
  if (!nome || !email || !senha || !tipo) {
    console.error("Dados inválidos:", { nome, email, senha, tipo });
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  // Verifica se o campo "type" é válido
  if (!["admin", "jogador"].includes(tipo)) {
    return res.status(400).json({ error: "Tipo de usuário inválido. Deve ser 'admin' ou 'jogador'." });
  }

  try {
    // Envia os dados para o serviço
    const newUser = await userService.registerUser({ nome, email, senha, tipo });
    res.status(201).json({ message: "Usuário criado com sucesso!", newUser });
  } catch (err) {
    console.error("Erro na criação do usuário:", err.message);
    // Lida com possíveis erros do serviço
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
