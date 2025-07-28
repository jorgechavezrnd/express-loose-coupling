class InvalidPetAgeType extends Error {
    constructor(message = 'Pet age must be an integer') {
        super(message);
        this.name = 'InvalidPetAgeType';
    }
}

module.exports = InvalidPetAgeType;
