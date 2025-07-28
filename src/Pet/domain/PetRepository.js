class PetRepository {
    async save(pet) {
        throw new Error('Method save must be implemented');
    }

    async findAll() {
        throw new Error('Method findAll must be implemented');
    }

    async findById(id) {
        throw new Error('Method findById must be implemented');
    }

    async update(id, pet) {
        throw new Error('Method update must be implemented');
    }

    async delete(id) {
        throw new Error('Method delete must be implemented');
    }
}

module.exports = PetRepository;
