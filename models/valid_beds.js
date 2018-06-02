const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const ValidBedsSchema = new Schema({
    id: {type: Number, required: true},
    bedCount: {type: Number, required: true},
    description: {type:String, require: false},
    name: {type:String, require: false}
});

module.exports = mongoose.model('Valid_Beds', ValidBedsSchema);