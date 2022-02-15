const router = require("express").Router();

//import routers
const productRoutes= require("./productRoutes");
const locationRoutes = require("./locationRoutes");



// define router paths
router.use("/products", productRoutes);
router.use("/locations", locationRoutes);

module.exports = router;