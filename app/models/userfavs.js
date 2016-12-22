// module.exports = function(sequelize, DataTypes){
// 	var User = sequelize.define("User", {
// 		user_name : DataTypes.STRING,
// 		user_password: DataTypes.STRING
// 	}, {
// 		timestamps: false
// 	});
// 	return User;
// };

module.exports = function(sequelize, DataTypes) {
    var userfavs = sequelize.define("userfavs", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        userId: {
            type: DataTypes.INTEGER
        },
        petId: {
            type: DataTypes.INTEGER
        }
    });
    return userfavs;
}
