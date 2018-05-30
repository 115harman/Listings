var express = require('express');

class LookupController {
    constructor () {
        this.router = express.Router();
        this.router.get('/beds', this.getBeds.bind(this));
    }

    getBeds() {
        const beds = [
            {
                BedCount: 1,
                Description: '1 Bedroom'
            },
            {
                BedCount: 2,
                Description: '2 Bedroom'
            },
            {
                BedCount: 3,
                Description: '3 Bedroom'
            },
            {
                BedCount: 4,
                Description: '4 Bedroom'
            }
        ];
        return res.json(beds);
    }
}

module.exports = new LookupController();