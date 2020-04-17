const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let author = new Schema ({
    name       : { type : String, required : true }
} );

module.exports = mongoose.model('author', author);