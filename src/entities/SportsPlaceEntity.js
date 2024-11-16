class SportsPlace {
  constructor(id, id_jogador, nome, localizacao, descricao, id_admin) {
    this.id = id;
    this.id_jogador = id_jogador;
    this.nome = nome;
    this.localizacao = localizacao;
    this.descricao = descricao;
    this.id_admin = id_admin;
  }
}

module.exports = SportsPlace;
