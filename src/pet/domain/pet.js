class Pet {
    constructor({ id, name, species, age, price }) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.age = age;
        this.price = price;
    }

    static fromPrimitives({ id, name, species, age, price }) {
        return new Pet({ id, name, species, age, price });
    }

    toPrimitives() {
        return {
            id: this.id,
            name: this.name,
            species: this.species,
            age: this.age,
            price: this.price
        };
    }
}

module.exports = Pet;
