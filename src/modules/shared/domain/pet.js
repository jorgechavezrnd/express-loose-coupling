const PetId = require('./petId');
const PetName = require('./petName');
const PetSpecies = require('./petSpecies');
const PetAge = require('./petAge');
const PetPrice = require('./petPrice');

class Pet {
    constructor({ id, name, species, age, price }) {
        this.id = new PetId(id);
        this.name = new PetName(name);
        this.species = new PetSpecies(species);
        this.age = new PetAge(age);
        this.price = new PetPrice(price);
    }

    static fromPrimitives({ id, name, species, age, price }) {
        return new Pet({ id, name, species, age, price });
    }

    toPrimitives() {
        return {
            id: this.id.value(),
            name: this.name.value(),
            species: this.species.value(),
            age: this.age.value(),
            price: this.price.value()
        };
    }
}

module.exports = Pet;
