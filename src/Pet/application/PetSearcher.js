class PetSearcher {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }

    async searchById(id) {
        const pet = await this.petRepository.findById(id);
        if (!pet) {
            throw new Error('Pet not found');
        }
        return pet;
    }
}

module.exports = PetSearcher;
