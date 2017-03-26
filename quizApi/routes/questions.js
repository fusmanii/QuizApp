var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Questions = require('../models/questions.js');

// GET /questions listing
router.get('/', function(req, res, next) {
  Questions.find(function(err, questions) {
    if (err) return next(err);
    res.json(questions);
  });
});

// GET /questions/:specie
router.get('/:specie', function(req, res, next) {
  Questions.find({specie: req.params.specie}, function(err, specieQuestions) {
    if (err) return next(err);
    res.json(specieQuestions);
  });
});

// POST /questions
router.post('/', function(req, res, next) {
  Questions.collection.insert(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

module.exports = router;
