var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
  specie: String,
  type: String,
  locations: String,
  size: String,
  lifespan: String,
  diet: String,
  description: String,
  imageUrl: { type: String, default: "https://images.sciencedaily.com/2013/04/130402182502_1_900x600.jpg" }
});

// Create index for specie for quick retrival
animalSchema.index({specie: 1});

module.exports = mongoose.model('animals', animalSchema);
