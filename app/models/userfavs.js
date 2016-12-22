
module.exports = function(sequelize, DataTypes) {
    var userfav = sequelize.define("userfav", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        userId: {
            type: DataTypes.INTEGER
        }
    },
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // When we delete an Author, we'll also delete their Posts "cascade"
          // An Author (foreignKey) is required or a Post can't be made
          userfav.belongsTo(models.Pet,
            {
              onDelete: "cascade",
              foreignKey: {
                allowNull: false
              }
            });
        }
      }
    });
    return userfav;
}
