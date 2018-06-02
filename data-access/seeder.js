const mongoose = require('mongoose'),
        State = require('../models/state'),
        Valid_Beds = require('../models/valid_beds'),
        Valid_Baths = require('../models/valid_baths'),
        Valid_PriceDictionary = require('../models/valid_price_dictionary'),
        seedData = require('./seed-data');

class Seeder {
    init() {
        mongoose.connection.db.listCollections({name: 'listings'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting db Seeder...');
                        this.seed();
                    }
                });
    }

    seed() {
        //States
        State.remove({})
        .then(returned => {console.log('States removed.')})
        .catch(err => {console.log(err)});

        State.insertMany(seedData.states)
        .then(r => {console.log('States added successfully.')})
        .catch(err => {console.log(err)});

        //valid beds
        Valid_Beds.remove({})
        .then(returned => {console.log('Valid beds removed.')})
        .catch(err => {console.log(err)});
        
        Valid_Beds.insertMany(seedData.valid_beds)
        .then(returned => {console.log('Valid beds added.')})
        .catch(err => {console.log(err)});

        //valid baths
        Valid_Baths.remove({})
        .then(returned => {console.log('Valid baths removed.')})
        .catch(err => {console.log(err)});
        
        Valid_Baths.insertMany(seedData.valid_baths)
        .then(returned => {console.log('Valid baths added.')})
        .catch(err => {console.log(err)});

        //valid baths
        Valid_PriceDictionary.remove({})
        .then(returned => {console.log('Valid PriceDictionary removed.')})
        .catch(err => {console.log(err)});
        
        Valid_PriceDictionary.insertMany(seedData.valid_price_dictionary)
        .then(returned => {console.log('Valid PriceDictionary added.')})
        .catch(err => {console.log(err)});
    }
}

module.exports = new Seeder();