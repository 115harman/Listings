const express = require('express'),
    Property = require('../../../models/property');

class PropertyController {
    constructor () {
        this.router = express.Router();
        this.router.get('/', this.getAllProperties.bind(this));
        this.router.post('/', this.insertyProperty.bind(this));
        this.router.get('/:id', this.getPropertyById.bind(this));
    }

    errorHandler(err) {
        if(err) {
            console.log(err);
            process.abort();
        }
    }

    getAllProperties(req, res, next) {
        Property.find({}, (err, data) => {
            this.errorHandler(err);
            res.json(data);
        });
    }

    getPropertyById(req, res, next) {
        const id = req.params.id;
        Property.findById(id, (err, property) => {
            res.json(property);
        });
    }

    insertyProperty(req, res, next) {
        var property = new Property();
        property.PropertyID					= req.body.PropertyID;
        property.AgentContactID				= req.body.AgentContactID;
        property.AgentBusinessID			= req.body.AgentBusinessID;
        property.MLSIdentifer				= req.body.MLSIdentifer;
        property.ListingAgentName			= req.body.ListingAgentName;
        property.ListingAgentCompany		= req.body.ListingAgentCompany;
        property.PropertyType				= req.body.PropertyType;
        property.YearBuilt					= req.body.YearBuilt;
        property.SquareFeet					= req.body.SquareFeet;
        property.LotSize					= req.body.LotSize;
        property.NumberOfBedrooms			= req.body.NumberOfBedrooms;
        property.NumberOfBathrooms			= req.body.NumberOfBathrooms;
        property.CurrentListPrice			= req.body.CurrentListPrice;
        property.CurrentListDate			= req.body.CurrentListDate;
        property.GeneralMarketingDescription= req.body.GeneralMarketingDescription;
        property.LotFeatures				= req.body.LotFeatures;
        property.InteriorFeatures			= req.body.InteriorFeatures;
        property.ExteriorFeatures			= req.body.ExteriorFeatures;
        property.BasementDescription		= req.body.BasementDescription;
        property.ParkingDescription			= req.body.ParkingDescription;
        property.SewerDescription			= req.body.SewerDescription;
        property.UtilitiesDescription		= req.body.UtilitiesDescription;
        property.NeighborhoodDescription	= req.body.NeighborhoodDescription;
        property.ElementarySchool			= req.body.ElementarySchool;
        property.MiddleSchool				= req.body.MiddleSchool;
        property.HighSchool					= req.body.HighSchool;
        property.Address1					= req.body.Address1;
        property.Address2					= req.body.Address2;
        property.City						= req.body.City;
        property.StateID					= req.body.StateID;
        property.ZipCode					= req.body.ZipCode;
        property.ZipCodePlusFour			= req.body.ZipCodePlusFour;
        property.County						= req.body.County;
        property.Latitude					= req.body.Latitude;
        property.Longitude					= req.body.Longitude;
        property.IsDeleted 					= req.body.IsDeleted;
        property.ConcurrencyID				= req.body.ConcurrencyID;
        property.CreatedDate				= req.body.CreatedDate;
        property.CreatedByUser				= req.body.CreatedByUser;
        property.LastUpdatedDate			= req.body.LastUpdatedDate;
        property.LastUpdatedByUser			= req.body.LastUpdatedByUser;
        property.ListingAgentPhone			= req.body.ListingAgentPhone;
        property.ListingAgentEmail			= req.body.ListingAgentEmail;
        property.ListingNumber				= req.body.ListingNumber;
        property.GeoLocation				= req.body.GeoLocation;

        property.save((err, p) => {
            this.errorHandler(err);
            res.json({status: true, error: null, property: p});
        });
    }
}

module.exports = new PropertyController();