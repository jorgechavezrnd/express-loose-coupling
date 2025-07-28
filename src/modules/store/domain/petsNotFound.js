class PetsNotFound extends Error {
    constructor(message = 'One or more pets not found') {
        super(message);
        this.name = 'PetsNotFound';
    }
}

module.exports = PetsNotFound;
