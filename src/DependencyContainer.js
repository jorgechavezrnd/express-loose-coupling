const MongoPetRepository = require('./Pet/infrastructure/MongoPetRepository');
const PetCreator = require('./Pet/application/PetCreator');
const PetsFinder = require('./Pet/application/PetsFinder');
const PetSearcher = require('./Pet/application/PetSearcher');
const PetDeleter = require('./Pet/application/PetDeleter');
const PetUpdater = require('./Pet/application/PetUpdater');

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
