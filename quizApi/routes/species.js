var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Species = require('../models/species.js');

/* GET /species listing. */
router.get('/', function(req, res, next) {
  Species.find(function(err, animals) {
    if (err) return next(err);
    res.json(animals);
  });
});

// POST /species
router.post('/', function(req, res, next) {
  Species.collection.insert(req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;