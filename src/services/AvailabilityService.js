const AvailabilityRepository = require('../repositories/AvailabilityRepository');

class AvailabilityService {
  constructor() {
    this.availabilityRepository = new AvailabilityRepository();
  }

  async listAvailabilities() {
    return await this.availabilityRepository.getAllAvailabilities();
  }

  async registerAvailability(availability) {
    return await this.availabilityRepository.createAvailability(availability);
  }

  async updateAvailability(id, updatedData) {
    return await this.availabilityRepository.updateAvailability(id, updatedData);
  }

 
async deleteAvalability(id) {
    return await this.availabilityRepository.deleteAvalability(id);
  }
}

module.exports = AvailabilityService;
