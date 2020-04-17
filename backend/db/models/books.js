const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let book = new Schema ({
   title :  { type: String, trim: true, required: true,},
   image :  { type: String, trim: true },
   link :  { type: String, required: true, trim: true, unique: true, },
   description :  { type: String, },
   authors : [ {type: String, trim: true} ]
} );


module.exports = mongoose.model('book', book);