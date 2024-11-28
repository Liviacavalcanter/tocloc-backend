const SportsPlaceRepository = require('../repositories/SportsPlaceRepository');


class SportsPlaceService {
  constructor() {
   this.SportsPlaceRepository = new SportsPlaceRepository();
  }

  // Método para listar esportes
  async listarEsportes() {
    return await this.SportsPlaceRepository.getAllSportsPlace();
  }


  async registerSportsPlace(sportsPlace) {
    return await this.sportsPlaceRepository.createSportsPlace(sportsPlace);
  }
}

module.exports = SportsPlaceService;
