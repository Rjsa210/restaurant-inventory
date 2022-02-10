const {DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");
const { Vendor } = require(".");

class Product extends Model { }

Product.init({
  //Product attributes defined here ID, Name, Price, Category, Pack size, count size, storage location, Storage, vendor, item number, locations
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "uncategorized",

  },
  Pack_size: {
    type: DataTypes.STRING,

  },
  count_size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  storage_location: {
    type: DataTypes.STRING,
  },
  vendor: {
    type: DataTypes.INTEGER,
    references: {
      model: "Vendor",
      key: "id"
    }
  },
  locations: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Location',
      key: "id"
    }
  }
  // unique: {
  //   type: DataTypes.UUIDV4,
  //   allowNull: false,
  //   autoIncrement: true,
  // } 
}, {
  sequelize,
  timestamps: false,
  
});

module.exports = Product;