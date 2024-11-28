class SportsPlace {
  constructor(id, nome, localizacao, descricao, id_admin, categoria, quant_jogadores, imagem) {
    this.id = id;
    this.nome = nome;
    this.localizacao = localizacao;
    this.descricao = descricao;
    this.id_admin = id_admin;
    this.categoria = categoria;
    this.quant_jogadores = quant_jogadores;
    this.imagem = imagem;
  }
}

module.exports = SportsPlace;
