const PetRepository = require('../domain/PetRepository');
const Pet = require('../domain/Pet');
const PetModel = require('./PetModel');

class MongoPetRepository extends PetRepository {
    async save(pet) {
        const petModel = new PetModel(pet.toPrimitives());
        const savedPet = await petModel.save();
        return Pet.fromPrimitives({
            id: savedPet._id.toString(),
            name: savedPet.name,
            species: savedPet.species,
            age: savedPet.age,
            price: savedPet.price
        });
    }

    async findAll() {
        const pets = await PetModel.find();
        return pets.map(pet => Pet.fromPrimitives({
            id: pet._id.toString(),
            name: pet.name,
            species: pet.species,
            age: pet.age,
            price: pet.price
        }));
    }

    async findById(id) {
        const pet = await PetModel.findById(id);
        if (!pet) return null;
        
        return Pet.fromPrimitives({
            id: pet._id.toString(),
            name: pet.name,
            species: pet.species,
            age: pet.age,
            price: pet.price
        });
    }

    async update(id, petData) {
        const updatedPet = await PetModel.findByIdAndUpdate(id, petData, { new: true });
        if (!updatedPet) return null;
        
        return Pet.fromPrimitives({
            id: updatedPet._id.toString(),
            name: updatedPet.name,
            species: updatedPet.species,
            age: updatedPet.age,
            price: updatedPet.price
        });
    }

    async delete(id) {
        const deletedPet = await PetModel.findByIdAndDelete(id);
        return deletedPet !== null;
    }
}

module.exports = MongoPetRepository;
