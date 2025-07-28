const MongoPetRepository = require('./pet/infrastructure/mongoPetRepository');
const PetCreator = require('./pet/application/petCreator');
const PetsFinder = require('./pet/application/petsFinder');
const PetSearcher = require('./pet/application/petSearcher');
const PetDeleter = require('./pet/application/petDeleter');
const PetUpdater = require('./pet/application/petUpdater');

const MongoStoreRepository = require('./store/infrastructure/mongoStoreRepository');
const AvailablePetsFinder = require('./store/application/availablePetsFinder');
const PurchaseVerifier = require('./store/application/purchaseVerifier');

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
