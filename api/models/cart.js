var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cart = new Schema({
    
   name:String
});
module.exports = mongoose.model('Cart', cart);