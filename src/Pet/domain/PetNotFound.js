class PetNotFound extends Error {
    constructor(message = 'Pet not found') {
        super(message);
        this.name = 'PetNotFound';
    }
}

module.exports = PetNotFound;
