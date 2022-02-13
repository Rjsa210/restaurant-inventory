const router = require("express").Router();
const { Location, Product, } = require("../../models");

// const productController = require("../../controllers/productController");

// router
//   .route('/')
//   .get(productController.getAll)
//   .post(productController.create)

// router.get('/', async (req, res) => {
//   try {
//     const ProductData = await Product.findAll({});
//     res.status(200).json(ProductData);
//   }
//   catch(err) {
//     console.log(err);
//     res.status(500).json(err)
//   }
// })

// router.get("/", async (req, res) => {
//   try{
//     console.log("sending...")
//     res.send("success!")
//   } catch (err) {
//     res.send("error")
//   }
// })
router.get("/", (req, res) => {
  Product.findAll()
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
})

router.post("/", (req, res) => {
  Product.create({
    product_name: req.body.product_name,
    category: req.body.category,
    pack_size: req.body.pack_size,
    count_size: req.body.count_size,
    storage_location: req.body.storage_location

  })
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err))
})

// router.post("/", (req, res) => {
//   console.log(req.body)
// })

module.exports = router; 