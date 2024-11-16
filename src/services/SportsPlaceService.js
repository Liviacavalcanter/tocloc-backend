const SportsPlaceRepository = require('../repositories/SportsPlaceRepository');

class SportsPlaceService {
  constructor() {
    this.sportsPlaceRepository = new SportsPlaceRepository();
  }

  async listSportsPlaces() {
    return await this.sportsPlaceRepository.getAllSportsPlace();
  }

  async registerSportsPlace(sportsPlace) {
    return await this.sportsPlaceRepository.createSportsPlace(sportsPlace);
  }
}

module.exports = SportsPlaceService;
