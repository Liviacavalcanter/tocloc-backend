const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }

  /**
   * Registra um novo usuário.
   * @param {Object} user - Dados do usuário (name, email, password, type).
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

    // Envia os dados validados para o repositório
    return await this.userRepository.createUser({ nome, email, senha, tipo });
  }
  
}

module.exports = UserService;
