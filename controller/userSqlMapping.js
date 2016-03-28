/**********************************************
 * Created by liangshaofeng on 2016年3月13日
 * sql语句定义
 **********************************************/


var user = {
  insert:'INSERT INTO mytable(id, name) VALUES(?,?)',
  update:'update user set name=?, age=? where id=?',
  delete: 'delete from user where id=?',
  queryById: 'select * from user where id=?',
  queryAll: 'select * from mytable'
};

module.exports = user;