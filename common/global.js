// 不得已暂时定义这么多全局变量

var redis = require("redis");
var wrapper = require('co-redis');
var Sequelize = require('sequelize');
var config = require('./config.js');

// 创建redis
global.redisClient = redis.createClient();
global.redisCo = wrapper(redisClient);

// 创建数据库
global.sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  host: config.mysql.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

global.User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING(20)
  },
  password: {
    type: Sequelize.STRING(20)
  }
}, {
  freezeTableName: true
});

