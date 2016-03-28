var redis = require("redis");
var redisClient = redis.createClient();
var co = require('co');
var wrapper = require('co-redis');
var redisCo = wrapper(redisClient);
co(function* () {
  console.log(yield redisCo.get('test')); // logs 33
})
console.log('dd')