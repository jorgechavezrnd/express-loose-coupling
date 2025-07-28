const InvalidPetPrice = require('./invalidPetPrice');

class PetPrice {
    constructor(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new InvalidPetPrice();
        }
        this._value = value;
    }

    value() {
        return this._value;
    }

    equals(other) {
        return other instanceof PetPrice && this._value === other._value;
    }
}

module.exports = PetPrice;
