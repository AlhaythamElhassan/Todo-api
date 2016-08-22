module.exports = function(sequelise, DataType) {
	return sequelise.define('todo', {
		description: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}
		},
		completed: {
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
};