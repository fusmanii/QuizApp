var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  specie: String,
  type: String,
  text: String,
  possibilities: [{answer: String}],
  selected: Number,
  correct: Boolean
});

 // Create index for specie for quick retrival
 questionSchema.index({specie: 1});

 module.exports = mongoose.model('questions', questionSchema);
