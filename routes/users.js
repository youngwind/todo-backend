var express = require('express');
var router = express.Router();
var is = require("is_js");

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

// 登录
router.post('/login', function (req, res, next) {
  var userName = req.body.userName;
  var password = req.body.password;
  if (is.empty(userName)) {
    throw new Error('缺乏用户名');
  }
  if (is.empty(password)) {
    throw  new Error('缺乏密码');
  }

  // 这里处理用户登录有待优化
  User.findAll({
    where: {
      username: userName,
      password: password
    }
  }).then(function (data) {
    if (is.empty(data)) {
      next(new Error('账号密码不正确'));
    } else {
      res.send({
        code: 0,
        data: {
          userId: data[0].dataValues.id,
          userName: data[0].dataValues.username
        }
      })
    }
  })
});


module.exports = router;
