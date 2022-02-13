const db = require("./config/connection");
const { Location, Product } = require("./models/index");

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
  product_name: "Tomatoes, Roma",
  category: "Produce",
  pack_size: "CS/20#",
  count_size: "CS",
  storage_location: "Cooler"
},
{
  product_name: "Tomatoes, Roma",
  category: "Produce",
  pack_size: "CS/20#",
  count_size: "CS",
  storage_location: "Cooler"
},
{
  product_name: "Tomatoes, Roma",
  category: "Produce",
  pack_size: "CS/20#",
  count_size: "CS",
  storage_location: "Cooler"
},
{
  product_name: "Tomatoes, Roma",
  category: "Produce",
  pack_size: "CS/20#",
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
  }
]