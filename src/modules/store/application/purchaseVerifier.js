const PetsNotFound = require('../domain/petsNotFound');
const InvalidCheckoutRequest = require('../domain/invalidCheckoutRequest');

class PurchaseVerifier {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }

    async verifyAndProcessCheckout(petIds) {
        // Validate request
        if (!petIds || !Array.isArray(petIds)) {
            throw new InvalidCheckoutRequest();
        }

        // Find pets by IDs
        const pets = await this.storeRepository.findPetsByIds(petIds);

        // Verify all pets were found
        if (pets.length !== petIds.length) {
            throw new PetsNotFound();
        }

        // This is a simplified checkout process.
        // In a real application, you would have more complex logic here, 
        // such as creating an order, processing payment, and updating inventory.

        return {
            message: 'Checkout successful',
            pets: pets
        };
    }
}

module.exports = PurchaseVerifier;
