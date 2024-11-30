const SportsPlaceRepository = require('../repositories/SportsPlaceRepository');


class SportsPlaceService {
  constructor() {
   this.sportsPlaceRepository = new SportsPlaceRepository();
  }

  async listarEsportes() {
    return await this.sportsPlaceRepository.getAllSportsPlace();
  }


  async registerSportsPlace(sportsPlace) {
    return await this.sportsPlaceRepository.createSportsPlace(sportsPlace);
  }

  async updateSportsPlace(id, updatedData) {
      return await this.sportsPlaceRepository.updateSportsPlace(id, updatedData);
    }
  
   
  async deleteSportsPlace(id) {
      return await this.sportsPlaceRepository.deleteSportsPlace(id);
    }

    async getReservationsBySportsPlaceId(id) {
      return await this.sportsPlaceRepository.getReservationsBySportsPlaceId(id);
    }
}

module.exports = SportsPlaceService;
