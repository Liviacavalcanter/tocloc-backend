const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }

  async registerUser(user) {
    return await this.userRepository.createUser(user);
  }
}

module.exports = UserService;
