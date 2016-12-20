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
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        user_name: {
            type: DataTypes.STRING
        },
        user_password: {
            type: DataTypes.STRING
        }
    },
        {
            
            classMethods: {
                associate: function(models) {

                    User.belongsToMany(models.Pet, {
                        through: 'userfavs',
                        foreignKey: 'petId',
                        as: 'userPet'
                    });
                }
            }
        });

    return User;
};
