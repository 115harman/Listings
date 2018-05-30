var express = require('express');

class PropertyController {
    constructor () {
        this.router = express.Router();
        this.router.get('/', this.getAllProperties.bind(this));
    }

    getAllProperties(req, res, next) {
        const properties = [
            {
                Id: 1,
                Address: 'test address',
                Beds: 2,
                Baths: 1,
                Area: 1200
            },
            {
                Id: 2,
                Address: 'test address 2',
                Beds: 3,
                Baths: 2,
                Area: 1500
            }
        ];
        return res.json(properties);
    }
}

module.exports = new PropertyController();