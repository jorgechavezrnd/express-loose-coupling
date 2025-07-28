const InvalidPetAgeType = require('./invalidPetAgeType');
const NegativePetAgeValue = require('./negativePetAgeValue');

class PetAge {
    constructor(value) {
        if (typeof value !== 'number' || !Number.isInteger(value)) {
            throw new InvalidPetAgeType();
        }
        if (value < 0) {
            throw new NegativePetAgeValue();
        }
        this._value = value;
    }

    value() {
        return this._value;
    }

    equals(other) {
        return other instanceof PetAge && this._value === other._value;
    }
}

module.exports = PetAge;
