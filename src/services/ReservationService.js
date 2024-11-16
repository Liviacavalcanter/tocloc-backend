const ReservationRepository = require('../repositories/ReservationRepository');

class ReservationService {
  constructor() {
    this.reservationRepository = new ReservationRepository();
  }

  async listReservations() {
    return await this.reservationRepository.getAllReservations();
  }

  async registerReservation(reservation) {
    return await this.reservationRepository.createReservation(reservation);
  }
}

module.exports = ReservationService;
