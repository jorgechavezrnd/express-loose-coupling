const Pet = require('../domain/Pet');

class PetCreator {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }

    async create(petData) {
        const pet = Pet.fromPrimitives(petData);
        return await this.petRepository.save(pet);
    }
}

module.exports = PetCreator;
