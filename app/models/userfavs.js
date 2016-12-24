// var User = require("./user.js");
// var Pet = require("./user.js");
// module.exports = function(sequelize, DataTypes) {
//     var userFav = sequelize.define("userFav", {
//         // User.belongsToMany(Pet, {  through :petid , foreignKey: 'userid' })
//         // Pet.belongsToMany(User, {  through :petid , foreignKey: 'petid' })

//     }, {
//         timestamps: true
//     });
//     return userFav;
// };


// Utils deprecated Non-object references property found. Support for that will be removed in version 4. 
// Expected { references: { model: "value", key: "key" } } 
// instead of { references: "value", referencesKey: "key" }. node_modules\sequelize\lib\model.js:87:25

var Pet = require("./pets.js");
var User = require("./user.js");

User.belongsToMany(models.Pet, {through: 'UserPet'});
Pet.belongsToMany(models.User, {through: 'UserPet'});

module.exports = function(sequelize, DataTypes) {
    var UserPet = sequelize.define("UserPet", {

    });

    return UserPet;
}

module.exports = function(sequelize, DataTypes) {
    var userFav = sequelize.define("userFav", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        UserId: {
            type: DataTypes.INTEGER,
            // primaryKey : true,
            // references:{
            // 	model: "User",
            // 	key: "id"
            // },
            // allowNull: false
        },
        PetId: {
            type: DataTypes.INTEGER,
            // primaryKey : true,
            // references:{
            // 	model: "Pets",
            // 	key: "id"
            // },
            // allowNull: false
        }
         }, {
        timestamps: false
    });
   

    return userFav;
}
