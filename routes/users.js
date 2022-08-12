'use strict';

var express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var router = express.Router();

/* GET users listing. */
/*router.create('/', function(req, res, next) {
  res.send('path for users WORKING');
});*/

router.get('/', function(req, res, next) {
  res.send('path for users WORKING');
});

/*
router.update('/', function(req, res, next) {
  res.send('path for users WORKING');
});*/


module.exports = router;