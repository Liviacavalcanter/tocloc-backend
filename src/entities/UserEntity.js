class User {
  constructor(id, name, email, type) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type; // Admin, Player, Visitor
  }
}

module.exports = User;
