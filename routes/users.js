var express = require('express');
var router = express.Router();

var user = require('../controller/user.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 用户注册
router.post('/register', function (req, res, next) {
  user.add(req, res, next);
});

// 返回所有用户
router.get('/allUser', function (req, res, next) {
  user.all(req, res, next);
});

module.exports = router;
