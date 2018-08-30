var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ad = new Schema({
    
   name:{ type: String},
});
module.exports = mongoose.model('Ad', ad);