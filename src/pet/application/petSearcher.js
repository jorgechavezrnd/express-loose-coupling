const PetNotFound = require('../domain/petNotFound');

class PetSearcher {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }

    async searchById(id) {
        const pet = await this.petRepository.findById(id);
        if (!pet) {
            throw new PetNotFound();
        }
        return pet;
    }
}

module.exports = PetSearcher;
