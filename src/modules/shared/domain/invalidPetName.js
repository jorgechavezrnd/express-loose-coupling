class InvalidPetName extends Error {
    constructor(message = 'Pet name must be a non-empty string') {
        super(message);
        this.name = 'InvalidPetName';
    }
}

module.exports = InvalidPetName;
