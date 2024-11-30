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

  async updateReservation(id, updatedData) {
    return await this.reservationRepository.updateReservation(id, updatedData);
  }

 
async deleteReservation(id) {
    return await this.reservationRepository.deleteReservation(id);
  }
}

module.exports = ReservationService;
