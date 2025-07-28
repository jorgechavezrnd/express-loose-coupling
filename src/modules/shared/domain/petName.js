const InvalidPetName = require('./invalidPetName');

class PetName {
    constructor(value) {
        if (!value || typeof value !== 'string' || value.trim().length === 0) {
            throw new InvalidPetName();
        }
        this._value = value.trim();
    }

    value() {
        return this._value;
    }

    equals(other) {
        return other instanceof PetName && this._value === other._value;
    }
}

module.exports = PetName;
