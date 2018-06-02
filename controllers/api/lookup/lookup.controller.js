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

    getBeds(req, res, next) {
        const data = Valid_Beds.find({});
        return res.json(data);
    }
    getBaths(req, res, next) {
        const data = Valid_Baths.find({});
        return res.json(data);
    }
    getPriceDictionaries(req, res, next) {
        const data = Valid_PriceDictionaries.find({});
        return res.json(data);
    }
}

module.exports = new LookupController();