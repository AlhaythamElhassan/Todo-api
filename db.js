var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/dev-todo-api.sqlite'
	});
}

var modelsPath = __dirname + '/models/';
var db = {}; 

db.todo = sequelize.import(modelsPath + 'todo.js');
db.user = sequelize.import(modelsPath + 'user.js')
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;