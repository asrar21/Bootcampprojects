var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mobile = new Schema({
    
    name: { type: String, required: true },
    price: { type: Number, required: true },
});
module.exports = mongoose.model('Mobile', mobile);