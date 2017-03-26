var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Answers = require('../models/answers.js');

/* GET /answers listing. */
router.get('/', function(req, res, next) {
  Answers.find(function(err, answers) {
    if (err) return next(err);
    res.json(answers);
  });
});

// GET /answers/:specie
router.get('/:specie', function(req, res, next) {
  Answers.find({specie: req.params.specie}, function(err, answers) {
    if (err) return next(err);
    res.json(answers);
  });
});

// POST /answers
router.post('/', function(req, res, next) {
  Answers.collection.insert(req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
