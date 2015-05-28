var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond userList');
});

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond user');
});

module.exports = router;
