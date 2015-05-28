var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login',{title:'用户登录'});
});

router.post('/login', function(req, res, next) {
  res.send('respond admin');
});

module.exports = router;
