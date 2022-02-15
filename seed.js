
const sequelize = require("sequelize");
const router = require("express").Router();
const { db, Location, Product } = require("./models/index");

const productSeeds = [
  {
    product_name: "Tomatoes, Roma",
    category: "Produce",
    pack_size: "CS/20#",
    count_size: "CS",
    storage_location: "Cooler"
  },
  {
    product_name: "Beef, Ribeye CAB",
    category: "Protein Beef",
    pack_size: "CS 70#",
    count_size: "#",
    storage_location: "Cooler"
  },
  {
    product_name: "Potatoes, Russet",
    category: "Produce, Cellar",
    pack_size: "CS/50#",
    count_size: "CS",
    storage_location: "Dry"
  },
  {
    product_name: "Milk, Whole",
    category: "Dairy",
    pack_size: "CS/ 4 Gal",
    count_size: "Gal",
    storage_location: "Cooler"
  },
  {
    product_name: "Shrimp, U10",
    category: "Produce",
    pack_size: "CS 5/2# bag",
    count_size: "2# Bag",
    storage_location: "Freezer"
  },
  {
    product_name: "Eggs, Whole",
    category: "Dairy",
    pack_size: "CS/ 15 dz",
    count_size: "CS",
    storage_location: "Cooler"
  },
]

const locationSeeds = [
  {
    location_name: "Lakefront"
  },
  {
    location_name: "Campo"
  },
  {
    location_name: "Yodler"
  },
  {
    location_name: "Whitebark"
  },
  {
    location_name: "53 Kitchen"
  },
  {
    location_name: "Mountainside Bar & Grill"
  }

]


function seedLocations() {
  Location.bulkCreate(locationSeeds)
    .then(console.log(`${locationSeeds.length} locations seeded successfully.`))
    .then(() => { process.exit() })

}

function seedProducts() {
  Product.bulkCreate(productSeeds)
    .then(console.log(`${productSeeds.length} products seeded successfully.`))
    .then(seedLocations)
}

seedProducts();