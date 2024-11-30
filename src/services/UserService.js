const UserRepository = require('../repositories/UserRepository');
const md5 = require('md5');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
  /**
   * Registra um novo usuário.
   * @param {Object} user - Dados do usuário (name, email, senha, type).
   */

  async registerUser(user) {
    const { nome, email, senha, tipo } = user;
    console.log("Dados recebidos no serviço:", { nome, email, senha, tipo });

    // Validação dos dados
    if (!nome || !email || !senha || !tipo) {
      throw new Error('Todos os campos são obrigatórios.');
    }

    if (!['admin', 'jogador'].includes(tipo)) {
      throw new Error('Tipo de usuário inválido. Deve ser "admin" ou "jogador".');
    }

    // Envia os dados validados
    return await this.userRepository.createUser({ nome, email, senha: md5(senha), tipo });
  }

  async updateUser(id, updates) {
    if (!id) {
      throw new Error("O ID do usuário é obrigatório.");
    }
  
    if (updates.senha) {
      // Criptografar a senha antes de atualizar
      updates.senha = md5(updates.senha);
    }
  
    return await this.userRepository.updateUser(id, updates);
  }

  async deleteUser(id) {
    if (!id) {
      throw new Error("O ID do usuário é obrigatório.");
    }
  
    return await this.userRepository.deleteUser(id);
  }
  
  
}

module.exports = UserService;