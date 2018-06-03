var express = require('express');
const Valid_Beds = require('../../../models/valid_beds'),
    Valid_Baths = require('../../../models/valid_baths'),
    Valid_PriceDictionaries = require('../../../models/valid_price_dictionary');

class LookupController {
    constructor () {
        this.router = express.Router();
        this.router.get('/beds', this.getBeds.bind(this));
        this.router.get('/baths', this.getBaths.bind(this));
        this.router.get('/pricedictionaries', this.getPriceDictionaries.bind(this));
    }

    errorHandler(err) {
        console.log(err);
    }

    getBeds(req, res, next) {
        Valid_Beds.find({}, 'id name description bedCount',(err, data) => { 
            this.errorHandler(err);
            res.json(data);
        });
    }
    getBaths(req, res, next) {
        Valid_Baths.find({}, 'id name description bathCount',(err, data) => { 
            this.errorHandler(err);
            res.json(data);
        });
    }
    getPriceDictionaries(req, res, next) {
        Valid_PriceDictionaries.find({}, 'id name description startPrice endPrice',(err, data) => { 
            this.errorHandler(err);
            res.json(data);
        });
    }
}

module.exports = new LookupController();