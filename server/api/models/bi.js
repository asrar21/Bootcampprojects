var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bi = new Schema({
    
    names: { type: String, required: true },
    
    price: { type: Number, required: true },
});
module.exports = mongoose.model('Bi', bi);