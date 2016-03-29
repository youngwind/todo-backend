// 不得已暂时定义这么多全局变量

var redis = require("redis");
var wrapper = require('co-redis');
var config = require('./config.js');


// 创建redis
global.redisClient = redis.createClient();
global.redisCo = wrapper(redisClient);

// 定义数据库
require('./db');

