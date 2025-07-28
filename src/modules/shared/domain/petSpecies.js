class PetSpecies {
    constructor(value) {
        this._value = value;
    }

    value() {
        return this._value;
    }

    equals(other) {
        return other instanceof PetSpecies && this._value === other._value;
    }
}

module.exports = PetSpecies;
