const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const ValidBathsSchema = new Schema({
    id: {type: Number, required: true},
    bathCount: {type: Number, required: true},
    description: {type:String, require: false},
    name: {type:String, require: false}
});

module.exports = mongoose.model('Valid_Baths', ValidBathsSchema);