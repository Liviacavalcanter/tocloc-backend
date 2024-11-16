class Reservation {
  constructor(id, id_jogador, id_local_esportivo, id_disponibilidade, data_reserva, status) {
    this.id = id;
    this.id_jogador = id_jogador;
    this.id_local_esportivo = id_local_esportivo;
    this.id_disponibilidade = id_disponibilidade;
    this.data_reserva = data_reserva;
    this.status = status;
  }
}

module.exports = Reservation;
