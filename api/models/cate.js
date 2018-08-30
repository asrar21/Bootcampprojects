var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cate = new Schema({
    
    name: { type: String, required: true },
   
   
});
module.exports = mongoose.model('Cate', cate);