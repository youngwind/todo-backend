var express = require('express');
var is = require('is_js');
var router = express.Router();
var checkToken = require('../middleware/check_token');

// 判断请求是否有合法的token
router.use(checkToken());


// 获取某个用户所有的todo
router.get('/all', function (req, res, next) {
  var userId = req.userId;
  Todos.findAll({
    where: {
      userId: userId
    }
  }).then(function (data) {
    res.send({
      code: 0,
      data: data
    })
  })

});

// 添加todo
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

// 删除todo
router.post('/delete', function (req, res, next) {
  var todoId = req.body.todoId;
  if (is.empty(todoId)) {
    throw  new Error('todoId 不能为空');
  }
  Todos.destroy({
    where: {
      id: todoId
    }
  }).then(function (data) {
    if (data == 0) {
      next(new Error('删除出错'));
    } else {
      res.send({
        code: 0,
        data: {
          id: todoId
        }
      })
    }

  });

});

// 完成某个todo
router.post('/complete', function (req, res, next) {
  var todoId = req.body.todoId;
  if (is.empty(todoId)) {
    throw new Error('todoId 不能为空');
  }
  Todos.update({
    status: 1
  }, {
    where: {
      id: todoId
    }
  }).then(function (data) {
    res.send({
      code: 0,
      data: {
        id: todoId
      }
    })
  });
});

// 取消完成某个todo
router.post('/uncomplete', function (req, res, next) {
  var todoId = req.body.todoId;
  if (is.empty(todoId)) {
    throw new Error('todoId 不能为空');
  }
  Todos.update({
    status: 0
  }, {
    where: {
      id: todoId
    }
  }).then(function (data) {
    res.send({
      code: 0,
      data: {
        id: todoId
      }
    })
  });
});


module.exports = router;