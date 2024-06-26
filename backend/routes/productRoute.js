const express = require("express");

const router = express.Router();

const { newProduct, getProducts } = require("../controllers/productController");

router.route("/products").get(getProducts);
router.route("/products/new").get(newProduct);

module.exports = router;
