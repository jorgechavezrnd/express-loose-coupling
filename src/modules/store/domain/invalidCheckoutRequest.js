class InvalidCheckoutRequest extends Error {
    constructor(message = 'Invalid request body') {
        super(message);
        this.name = 'InvalidCheckoutRequest';
    }
}

module.exports = InvalidCheckoutRequest;
