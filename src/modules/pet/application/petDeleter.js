const PetNotFound = require('../domain/petNotFound');

class PetDeleter {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }

    async delete(id) {
        const petExists = await this.petRepository.findById(id);
        if (!petExists) {
            throw new PetNotFound();
        }

        const deleted = await this.petRepository.delete(id);
        if (!deleted) {
            throw new Error('Failed to delete pet');
        }

        return true;
    }
}

module.exports = PetDeleter;
