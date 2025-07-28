const PetNotFound = require('../domain/petNotFound');

class PetUpdater {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }

    async update(id, petData) {
        const existingPet = await this.petRepository.findById(id);
        if (!existingPet) {
            throw new PetNotFound();
        }

        const updatedPet = await this.petRepository.update(id, petData);
        if (!updatedPet) {
            throw new Error('Failed to update pet');
        }

        return updatedPet;
    }
}

module.exports = PetUpdater;
