var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var post = new Schema({
    
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});
module.exports = mongoose.model('Post', post);