const { DataTypes, Model } = require("sequelize");

class Vendor extends Model {}

Vendor.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  vendor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Products: {
    type: DataTypes.INTEGER,
    references: {
      model: "Vendor",
      key: "id"
    }
  }

},{
  sequelize,
  timestamps: false
});

module.exports = Vendor;