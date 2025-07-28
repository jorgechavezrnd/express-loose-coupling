class NegativePetAgeValue extends Error {
    constructor(message = 'Pet age cannot be negative') {
        super(message);
        this.name = 'NegativePetAgeValue';
    }
}

module.exports = NegativePetAgeValue;
