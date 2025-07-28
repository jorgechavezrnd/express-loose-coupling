class InvalidPetPrice extends Error {
    constructor(message = 'Pet price must be a non-negative number') {
        super(message);
        this.name = 'InvalidPetPrice';
    }
}

module.exports = InvalidPetPrice;
