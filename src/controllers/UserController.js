const express = require('express');
const UserService = require('../services/UserService');
const router = express.Router();
const userService = new UserService();
const authentication  = require('../middleware/authentication.midle');


// Rota para listar todos os usuários
router.get('/', authentication, async (req, res) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para criar um novo usuário
router.post("/", async (req, res) => {
  console.log("Dados recebidos na rota:", req.body); // Log dos dados recebidos
  const { nome, email, senha, tipo } = req.body;

  // Validação dos dados recebidos
  if (!nome || !email || !senha || !tipo) {
    console.error("Dados inválidos:", { nome, email, senha, tipo });
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });  
  }

  // Verifica se o campo "tipo" é válido
  if (!["admin", "jogador"].includes(tipo)) {
    return res.status(400).json({ error: "Tipo de usuário inválido. Deve ser 'admin' ou 'jogador'." });
  }

  try {
    // Envia os dados para o serviço
    const newUser = await userService.registerUser({ nome, email, senha, tipo });
    res.status(201).json({ message: "Usuário criado com sucesso!", newUser });
  } catch (err) {
    console.error("Erro na criação do usuário:", err.message);
    res.status(500).json({ error: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuario: ' + err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send(); // Não retorna corpo, apenas o status 204 de sucesso
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar local esportivo: ' + err.message });
  }
});

module.exports = router;
