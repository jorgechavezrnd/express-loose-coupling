const container = require('../dependencyContainer');
const PetNotFound = require('../modules/pet/domain/petNotFound');

exports.createPet = async (req, res) => {
    try {
        const petCreator = container.getPetCreator();
        const pet = await petCreator.create(req.body);
        res.status(201).json(pet.toPrimitives());
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllPets = async (req, res) => {
    try {
        const petsFinder = container.getPetsFinder();
        const pets = await petsFinder.findAll();
        res.status(200).json(pets.map(pet => pet.toPrimitives()));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPetById = async (req, res) => {
    try {
        const petSearcher = container.getPetSearcher();
        const pet = await petSearcher.searchById(req.params.id);
        res.status(200).json(pet.toPrimitives());
    } catch (error) {
        if (error instanceof PetNotFound) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

exports.updatePet = async (req, res) => {
    try {
        const petUpdater = container.getPetUpdater();
        const pet = await petUpdater.update(req.params.id, req.body);
        res.status(200).json(pet.toPrimitives());
    } catch (error) {
        if (error instanceof PetNotFound) {
            return res.status(404).json({ message: error.message });
        }
        res.status(400).json({ message: error.message });
    }
};

exports.deletePet = async (req, res) => {
    try {
        const petDeleter = container.getPetDeleter();
        await petDeleter.delete(req.params.id);
        res.status(200).json({ message: 'Pet deleted successfully' });
    } catch (error) {
        if (error instanceof PetNotFound) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};
