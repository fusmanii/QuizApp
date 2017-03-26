var mongoose = require('mongoose');

var specieSchema = mongoose.Schema({
  specie: String,
  imageUrl: String
});

module.exports = mongoose.model('species', specieSchema);