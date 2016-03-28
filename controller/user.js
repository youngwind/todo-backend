"use strict";

// 实现与MySQL交互
var mysql = require('mysql');
var config = require('../common/config.js');

// 这种写法太挫了吧。。。
var $sql = require('./userSqlMapping');

module.exports = {

  // 添加用户
  add: function (req, res, next) {
    var param = req.query || req.params;
    var connection = mysql.createConnection(config.mysql);
    connection.connect();
    connection.query($sql.insert, [param.id, param.name], function (err, rows, fields) {
      if (err) {
        res.json({
          code: '1',
          msg: '操作失败'
        });
        throw err;

      }
      res.json({
        code: 200,
        msg: "增加成功"
      });

    });

    connection.end();

  },

  // 返回用户信息
  all: function (req, res, next) {
    var connection = mysql.createConnection(config.mysql);
    connection.connect();
    connection.query($sql.queryAll, function (err, rows, fields) {
      console.log(err);
      if (err) {
        res.json({
          code: '1',
          msg: '操作失败'
        });
        throw err;
      }
      res.json({
        code: 200,
        msg: rows
      });

    });

    connection.end();
  }
};