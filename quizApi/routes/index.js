var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dir = __dirname.split('/');
  dir.pop();
  res.sendFile(dir.join('/') + '/views/index.html');
});

module.exports = router;
