class StoreRepository {
    async findAvailablePets() {
        throw new Error('Method findAvailablePets must be implemented');
    }

    async findPetsByIds(petIds) {
        throw new Error('Method findPetsByIds must be implemented');
    }
}

module.exports = StoreRepository;
