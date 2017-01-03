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
                isEmail: true,            // checks for email format (foo@bar.com)
                notEmpty: true           // don't allow empty strings

            }
        },
        user_password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true           // don't allow empty strings
                
            }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false

        }
     });
    return User;
}

