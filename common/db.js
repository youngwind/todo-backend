var Sequelize = require('sequelize');
var config = require('./config.js');

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

global.Todos = sequelize.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  },
  content: {
    type: Sequelize.STRING(100)
  },
  status: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true
});