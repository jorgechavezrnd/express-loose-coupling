class PetId {
    constructor(value) {
        this._value = value;
    }

    value() {
        return this._value;
    }

    equals(other) {
        return other instanceof PetId && this._value === other._value;
    }
}

module.exports = PetId;
