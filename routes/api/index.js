const router = require("express").Router();

//import routers
const productRoutes= require("./productRoutes");

// define router paths
router.use("/products", productRoutes);

module.exports = router;