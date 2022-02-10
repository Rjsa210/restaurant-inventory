const { DataTypes, Model } = require("sequelize");

class Location extends Model { }

Location.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,

  },
  location_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Products: {
    type: DataTypes.INTEGER,
    references: {
      model: "Product",
      key: "id"
    }
  }

},{
  sequelize,
  timestamps: false
});

module.exports = Location;