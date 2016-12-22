
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
