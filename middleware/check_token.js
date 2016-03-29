/**********************************************
 * Created by liangshaofeng on 2016年3月27日
 * 检测用户token是否合法
 **********************************************/

var co = require('co');
var is = require('is_js');

module.exports = function () {
  return function (req, res, next) {
    var token = req.query.token;
    if (is.existy(token)) {
      co(function* () {
        var userId = yield redisCo.get(token);
        if (is.existy(userId)) {
          next();
        } else {
          next(new Error('token无效'));
        }
      })
    } else {
      throw new Error('没有token');
    }
  }
};