const router = require("express").Router();

const {Location, Product } = require("../../models");

router.get("/", (req, res) => {
  Location.findAll({})
  .then((data) => res.send(data).status(200))
  .catch((err) => res.send(err).status(500))
})

router.post("/", (req, res) => {
  Location.create({
    location_name: req.body.location_name
  })
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(500).send(err))
})

module.exports = router;