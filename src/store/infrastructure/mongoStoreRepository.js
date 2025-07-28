const StoreRepository = require('../domain/storeRepository');
const Pet = require('../../pet/domain/pet');
const PetModel = require('../../pet/infrastructure/petModel');

class MongoStoreRepository extends StoreRepository {
    async findAvailablePets() {
        const pets = await PetModel.find();
        return pets.map(pet => Pet.fromPrimitives({
            id: pet._id.toString(),
            name: pet.name,
            species: pet.species,
            age: pet.age,
            price: pet.price
        }));
    }

    async findPetsByIds(petIds) {
        const pets = await PetModel.find({ '_id': { $in: petIds } });
        return pets.map(pet => Pet.fromPrimitives({
            id: pet._id.toString(),
            name: pet.name,
            species: pet.species,
            age: pet.age,
            price: pet.price
        }));
    }
}

module.exports = MongoStoreRepository;
