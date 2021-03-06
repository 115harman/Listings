const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PropertySchema = new Schema({
    PropertyID: { type: Number, required: true },
    AgentContactID: Number,
    AgentBusinessID: Number,
    MLSIdentifer : String,
    ListingAgentName : String,
    ListingAgentCompany : String,
    PropertyType : String,
    YearBuilt: Number,
    SquareFeet: Number,
    LotSize : String,
    NumberOfBedrooms : Schema.Types.Decimal128,
    NumberOfBathrooms : Schema.Types.Decimal128,
    CurrentListPrice : Number,
    CurrentListDate : Date,
    GeneralMarketingDescription : String,
    LotFeatures : String,
    InteriorFeatures : String,
    ExteriorFeatures : String,
    BasementDescription : String,
    ParkingDescription : String,
    SewerDescription : String,
    UtilitiesDescription : String,
    NeighborhoodDescription : String,
    ElementarySchool : String,
    MiddleSchool : String,
    HighSchool : String,
    Address1 : String,
    Address2 : String,
    City : String,
    StateID : String,
    ZipCode : String,
    ZipCodePlusFour : String,
    County : String,
    Latitude : Schema.Types.Decimal128,
    Longitude : Schema.Types.Decimal128,
    IsDeleted : {type: Boolean, default: false},
    ConcurrencyID : Number,
    CreatedDate : {type: Date, default: Date.now()},
    CreatedByUser : Number,
    LastUpdatedDate : {type: Date, default: Date.now()},
    LastUpdatedByUser : Number,
    ListingAgentPhone : String,
    ListingAgentEmail : String,
    ListingNumber : Number,
    GeoLocation: String
});

module.exports = mongoose.model('Property', PropertySchema);