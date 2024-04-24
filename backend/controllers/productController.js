const Product = require("../models/product");

//create new product => /api/v1/product/new

async function newProduct(req, res, next) {
  const product = await Product.create(req.body);

  res.status(201).json({ success: true, product });
}
async function getProducts(req, res, next) {
  const product = await Product.create(req.body);

  res.status(201).json({ success: true, product });
}

module.exports = {
  newProduct,
  getProducts,
};
