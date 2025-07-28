const container = require('../dependencyContainer');
const PetsNotFound = require('../store/domain/petsNotFound');
const InvalidCheckoutRequest = require('../store/domain/invalidCheckoutRequest');

exports.getAvailablePets = async (req, res) => {
    try {
        const availablePetsFinder = container.getAvailablePetsFinder();
        const pets = await availablePetsFinder.findAll();
        res.status(200).json(pets.map(pet => pet.toPrimitives()));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.checkout = async (req, res) => {
    const { petIds } = req.body;

    try {
        const purchaseVerifier = container.getPurchaseVerifier();
        const result = await purchaseVerifier.verifyAndProcessCheckout(petIds);
        
        res.status(200).json({
            message: result.message,
            pets: result.pets.map(pet => pet.toPrimitives())
        });
    } catch (error) {
        if (error instanceof InvalidCheckoutRequest) {
            return res.status(400).json({ message: error.message });
        }
        if (error instanceof PetsNotFound) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};
