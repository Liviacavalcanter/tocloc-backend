class User {
  constructor(id, nome, email, tipo, senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.tipo = tipo; // Admin, Jogador, Visitante
    this.senha = senha; 
  }
}

module.exports = User;
