class PetsFinder {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }

    async findAll() {
        return await this.petRepository.findAll();
    }
}

module.exports = PetsFinder;
