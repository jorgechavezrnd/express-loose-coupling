class InvalidPetAge extends Error {
    constructor(message = 'Pet age cannot be negative') {
        super(message);
        this.name = 'InvalidPetAge';
    }
}

module.exports = InvalidPetAge;
