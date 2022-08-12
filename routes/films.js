var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('path for movies and series WORKING');
});

module.exports = router;
