class AvailablePetsFinder {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }

    async findAll() {
        return await this.storeRepository.findAvailablePets();
    }
}

module.exports = AvailablePetsFinder;
