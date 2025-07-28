const MongoPetRepository = require('./modules/pet/infrastructure/mongoPetRepository');
const PetCreator = require('./modules/pet/application/petCreator');
const PetsFinder = require('./modules/pet/application/petsFinder');
const PetSearcher = require('./modules/pet/application/petSearcher');
const PetDeleter = require('./modules/pet/application/petDeleter');
const PetUpdater = require('./modules/pet/application/petUpdater');

const MongoStoreRepository = require('./modules/store/infrastructure/mongoStoreRepository');
const AvailablePetsFinder = require('./modules/store/application/availablePetsFinder');
const PurchaseVerifier = require('./modules/store/application/purchaseVerifier');

class DependencyContainer {
    constructor() {
        // Pet dependencies
        this.petRepository = new MongoPetRepository();
        this.petCreator = new PetCreator(this.petRepository);
        this.petsFinder = new PetsFinder(this.petRepository);
        this.petSearcher = new PetSearcher(this.petRepository);
        this.petDeleter = new PetDeleter(this.petRepository);
        this.petUpdater = new PetUpdater(this.petRepository);

        // Store dependencies
        this.storeRepository = new MongoStoreRepository();
        this.availablePetsFinder = new AvailablePetsFinder(this.storeRepository);
        this.purchaseVerifier = new PurchaseVerifier(this.storeRepository);
    }

    // Pet services
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

    // Store services
    getAvailablePetsFinder() {
        return this.availablePetsFinder;
    }

    getPurchaseVerifier() {
        return this.purchaseVerifier;
    }
}

module.exports = new DependencyContainer();
