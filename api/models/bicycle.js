var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bicycle = new Schema({
    
    name: { type: String, required: true },
    Description: { type: String, required: true },
    price: { type: Number, required: true },
});
module.exports = mongoose.model('Bicycle', bicycle);