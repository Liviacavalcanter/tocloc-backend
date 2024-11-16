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
}

module.exports = AvailabilityService;
