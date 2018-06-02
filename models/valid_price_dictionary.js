const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const ValidPriceDictionarySchema = new Schema({
    id: {type: Number, required: true},
    startPrice: {type: Number, required: true},
    endPrice: {type: Number},
    description: {type:String, require: false},
    name: {type:String, require: false}
});

module.exports = mongoose.model('Valid_PriceDictionary', ValidPriceDictionarySchema);