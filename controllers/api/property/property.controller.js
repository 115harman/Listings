const express = require('express'),
    Property = require('../../../models/property');

class PropertyController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', this.getAllProperties.bind(this));
        this.router.post('/', this.insertyProperty.bind(this));
        this.router.get('/:id', this.getPropertyById.bind(this));
        this.router.get('/search', this.getPropertiesByFilter.bind(this));
    }

    errorHandler(err) {
        if (err) {
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

    getPropertiesByFilter(req, res) {
        var filter = {
            AgentContactID: req.query.AgentContactID,
            AgentBusinessID: req.query.AgentBusinessID,
            MLSIdentifer: req.query.MLSIdentifer,
            ListingAgentName: req.query.ListingAgentName,
            ListingAgentCompany: req.query.ListingAgentCompany,
            PropertyType: req.query.PropertyType,
            YearBuilt: req.query.YearBuilt,
            SquareFeet: req.query.SquareFeet,
            LotSize: req.query.LotSize,
            NumberOfBedrooms: req.query.NumberOfBedrooms,
            NumberOfBathrooms: req.query.NumberOfBathrooms,
            CurrentListPrice: req.query.CurrentListPrice,
            CurrentListDate: req.query.CurrentListDate,
            GeneralMarketingDescription: req.query.GeneralMarketingDescription,
            LotFeatures: req.query.LotFeatures,
            InteriorFeatures: req.query.InteriorFeatures,
            ExteriorFeatures: req.query.ExteriorFeatures,
            BasementDescription: req.query.BasementDescription,
            ParkingDescription: req.query.ParkingDescription,
            SewerDescription: req.query.SewerDescription,
            UtilitiesDescription: req.query.UtilitiesDescription,
            NeighborhoodDescription: req.query.NeighborhoodDescription,
            ElementarySchool: req.query.ElementarySchool,
            MiddleSchool: req.query.MiddleSchool,
            HighSchool: req.query.HighSchool,
            Address1: req.query.Address1,
            Address2: req.query.Address2,
            City: req.query.City,
            StateID: req.query.StateID,
            ZipCode: req.query.ZipCode,
            ZipCodePlusFour: req.query.ZipCodePlusFour,
            County: req.query.County,
            Latitude: req.query.Latitude,
            Longitude: req.query.Longitude,
            IsDeleted: req.query.IsDeleted,
            ConcurrencyID: req.query.ConcurrencyID,
            CreatedDate: req.query.CreatedDate,
            CreatedByUser: req.query.CreatedByUser,
            LastUpdatedDate: req.query.LastUpdatedDate,
            LastUpdatedByUser: req.query.LastUpdatedByUser,
            ListingAgentPhone: req.query.ListingAgentPhone,
            ListingAgentEmail: req.query.ListingAgentEmail,
            ListingNumber: req.query.ListingNumber,
            GeoLocation: req.query.GeoLocation
        }

        Property.find(filter, (err, properties) => {
            this.errorHandler(err);
            res.json(properties);
        });
    }

    insertyProperty(req, res, next) {
        var property = new Property();
        property.PropertyID = req.body.PropertyID;
        property.AgentContactID = req.body.AgentContactID;
        property.AgentBusinessID = req.body.AgentBusinessID;
        property.MLSIdentifer = req.body.MLSIdentifer;
        property.ListingAgentName = req.body.ListingAgentName;
        property.ListingAgentCompany = req.body.ListingAgentCompany;
        property.PropertyType = req.body.PropertyType;
        property.YearBuilt = req.body.YearBuilt;
        property.SquareFeet = req.body.SquareFeet;
        property.LotSize = req.body.LotSize;
        property.NumberOfBedrooms = req.body.NumberOfBedrooms;
        property.NumberOfBathrooms = req.body.NumberOfBathrooms;
        property.CurrentListPrice = req.body.CurrentListPrice;
        property.CurrentListDate = req.body.CurrentListDate;
        property.GeneralMarketingDescription = req.body.GeneralMarketingDescription;
        property.LotFeatures = req.body.LotFeatures;
        property.InteriorFeatures = req.body.InteriorFeatures;
        property.ExteriorFeatures = req.body.ExteriorFeatures;
        property.BasementDescription = req.body.BasementDescription;
        property.ParkingDescription = req.body.ParkingDescription;
        property.SewerDescription = req.body.SewerDescription;
        property.UtilitiesDescription = req.body.UtilitiesDescription;
        property.NeighborhoodDescription = req.body.NeighborhoodDescription;
        property.ElementarySchool = req.body.ElementarySchool;
        property.MiddleSchool = req.body.MiddleSchool;
        property.HighSchool = req.body.HighSchool;
        property.Address1 = req.body.Address1;
        property.Address2 = req.body.Address2;
        property.City = req.body.City;
        property.StateID = req.body.StateID;
        property.ZipCode = req.body.ZipCode;
        property.ZipCodePlusFour = req.body.ZipCodePlusFour;
        property.County = req.body.County;
        property.Latitude = req.body.Latitude;
        property.Longitude = req.body.Longitude;
        property.IsDeleted = req.body.IsDeleted;
        property.ConcurrencyID = req.body.ConcurrencyID;
        property.CreatedDate = req.body.CreatedDate;
        property.CreatedByUser = req.body.CreatedByUser;
        property.LastUpdatedDate = req.body.LastUpdatedDate;
        property.LastUpdatedByUser = req.body.LastUpdatedByUser;
        property.ListingAgentPhone = req.body.ListingAgentPhone;
        property.ListingAgentEmail = req.body.ListingAgentEmail;
        property.ListingNumber = req.body.ListingNumber;
        property.GeoLocation = req.body.GeoLocation;

        property.save((err, p) => {
            this.errorHandler(err);
            res.json({ status: true, error: null, property: p });
        });
    }
}

module.exports = new PropertyController();