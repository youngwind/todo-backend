var express = require('express');
var router = express.Router();
var is = require("is_js");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 用户注册
router.post('/register', function (req, res, next) {

  var userName = req.body.userName;
  var password = req.body.password;

  if (is.empty(userName)) {
    throw new Error('缺乏用户名');
  }
  if (is.empty(password)) {
    throw  new Error('缺乏密码');
  }

  // 创建用户
  User.create({
    username: userName,
    password: password
  }).then(function (data) {
    res.send({
      code: 0,
      data: {
        id: data.dataValues.id,
        userName: data.dataValues.username
      }
    })
  });

});


module.exports = router;
