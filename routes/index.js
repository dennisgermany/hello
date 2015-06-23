var express = require('express');
var router = express.Router();
var mongo = require('../mongo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  mongo();
  res.render('index', { title: 'Express' });
});


router.get('/foo', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
