const MongoPetRepository = require('./pet/infrastructure/mongoPetRepository');
const PetCreator = require('./pet/application/petCreator');
const PetsFinder = require('./pet/application/petsFinder');
const PetSearcher = require('./pet/application/petSearcher');
const PetDeleter = require('./pet/application/petDeleter');
const PetUpdater = require('./pet/application/petUpdater');

class DependencyContainer {
    constructor() {
        this.petRepository = new MongoPetRepository();
        this.petCreator = new PetCreator(this.petRepository);
        this.petsFinder = new PetsFinder(this.petRepository);
        this.petSearcher = new PetSearcher(this.petRepository);
        this.petDeleter = new PetDeleter(this.petRepository);
        this.petUpdater = new PetUpdater(this.petRepository);
    }

    getPetCreator() {
        return this.petCreator;
    }

    getPetsFinder() {
        return this.petsFinder;
    }

    getPetSearcher() {
        return this.petSearcher;
    }

    getPetDeleter() {
        return this.petDeleter;
    }

    getPetUpdater() {
        return this.petUpdater;
    }
}

module.exports = new DependencyContainer();
