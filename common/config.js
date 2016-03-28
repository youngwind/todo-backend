/**********************************************
 * Created by liangshaofeng on 2016年3月13日
 * 配置文件
 **********************************************/

module.exports = {

  port: 9999,

  // MySQL数据库联接配置
  mysql: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test', // 前面建的user表位于这个数据库中
    port: 3306
  }
};