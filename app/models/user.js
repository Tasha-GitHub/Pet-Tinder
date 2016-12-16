module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
		user_name : DataTypes.STRING,
		user_password: DataTypes.STRING
	}, {
		timestamps: false
	});
	return User;
};