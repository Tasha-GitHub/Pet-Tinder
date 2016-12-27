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
            type: DataTypes.STRING,
            validate: {
                len: [3,50],              // only allow values with length between X and Y
                notEmpty: true           // don't allow empty strings

            }
        },
        user_password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,           // don't allow empty strings
                len: [3,50]              // only allow values with length between X and Y
                
            }
        }
     });
    return User;
}

