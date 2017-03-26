var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
  specie: String,
  answers: [Number]
});

answerSchema.index({specie: 1});

module.exports = mongoose.model('answers', answerSchema);