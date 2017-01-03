var sequelize = require('sequelize');
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
            validate :{
                notEmpty: true,          // don't allow empty strings
            }
        },
        pet_age: {
            type: DataTypes.INTEGER,
            validate :{
                notEmpty: true,           // don't allow empty strings
                isNumeric: true          // will only allow numbers
            }
        },
        pet_breed: {
            type: DataTypes.STRING,
            validate :{
                notEmpty: true           // don't allow empty strings
            }
        },
        pet_color: {
            type: DataTypes.STRING,
            validate :{
                notEmpty: true           // don't allow empty strings
            }

        },
        pet_type: {
            type: DataTypes.STRING,
            validate :{
                notEmpty: true           // don't allow empty strings
            }
        },
        pet_gender: {
            type: DataTypes.STRING,
            validate :{
                is: ["^[a-z]+$",'i'],     // will only allow letters
                notEmpty: true           // don't allow empty strings
            }
        },
        pet_size: {
            type: DataTypes.STRING,
            validate :{
                notEmpty: true           // don't allow empty strings
            }
        },
        pet_photo: {
            type: DataTypes.STRING,
            validate :{
                notEmpty: true,           // don't allow empty strings
                isUrl: true              // checks for url format (http://foo.com)
            }

        },
        pet_description: {
            type: DataTypes.TEXT,
            validate :{
                notEmpty: true           // don't allow empty strings
            }
        }
    },{
    
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          Pet.hasMany(models.userfav);
        }
      }
    });

    return Pet;
    
}
