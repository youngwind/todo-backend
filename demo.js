var Sequelize = require('sequelize');
var config = require('./common/config.js');


var sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  host:config.mysql.host,
  dialect:'mysql',
  pool:{
    max:5,
    min:0,
    idle:10000
  }
});

var User = sequelize.define('user2', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});



User.findOne().then(function (user) {
  console.log(user.firstName);
});

//User.findOne().then(function(user){
//  console.log(user.name);
//});