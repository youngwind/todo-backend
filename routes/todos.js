var express = require('express');
var is = require('is_js');
var router = express.Router();
var checkToken = require('../middleware/check_token');

// 判断请求是否有合法的token
router.use(checkToken());

router.get('/all', function (req, res, next) {
  var userId = req.userId;
  res.send({
    code: 0,
    data: {
      name: userId
    }
  })
});

router.post('/add', function (req, res, next) {
  var content = req.body.content;
  if (is.empty(content)) {
    throw new Error('todo内容不能为空');
  }
  Todos.create({
    userId: req.userId,
    content: content,
    status: 0
  }).then(function (data) {
    res.send({
      code: 0,
      data: {
        id: data.dataValues.id
      }
    })
  });
});

module.exports = router;