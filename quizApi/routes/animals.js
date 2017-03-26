var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Animals = require('../models/animals.js');

/* GET /animals listing. */
router.get('/', function(req, res, next) {
  Animals.find(function(err, animals) {
    if (err) return next(err);
    res.json(animals);
  });
});

// GET /animals/:specie
router.get('/:specie', function(req, res, next) {
  Animals.find({specie: req.params.specie}, function(err, species) {
    if (err) return next(err);
    res.json(species);
  });
});

// POST /animals
router.post('/', function(req, res, next) {
  Animals.collection.insert(req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
