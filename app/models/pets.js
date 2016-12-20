// module.exports = function(sequelize, DataTypes) {
//     var Pet = sequelize.define("Pet", {
//         pet_type: DataTypes.STRING,
//         pet_name: DataTypes.STRING,
//         pet_age: DataTypes.INTEGER,
//         pet_breed: DataTypes.STRING,
//         pet_color: DataTypes.STRING,
//         pet_size: DataTypes.STRING,
//         pet_photo: DataTypes.STRING,
//         pet_location: DataTypes.STRING,
//         pet_description: DataTypes.STRING,
//     }, {
//         timestamps: true
//     });
//     return Pet;
// };

module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        pet_name: {
            type: DataTypes.STRING,
        },
        pet_age: {
            type: DataTypes.INTEGER,
        },
        pet_breed: {
            type: DataTypes.STRING,
        },
        pet_color: {
            type: DataTypes.STRING,
        },
        pet_type: {
            type: DataTypes.STRING,
        },
        pet_gender: {
            type: DataTypes.STRING,
        },
        pet_size: {
            type: DataTypes.STRING,
        },
        pet_photo: {
            type: DataTypes.STRING,
        }

    },{
        
        classMethods: {
            associate: function(models) {

                Pet.belongsToMany(models.User, {
                    through: 'userfavs',
                    foreignKey: 'userId',
                    as: 'petUser'
                });
            }
        }
    });

    return Pet;
}
