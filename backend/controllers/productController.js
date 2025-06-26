const Product = require('../models/Product');

// Get all products or filter by brand
exports.getProducts = async (req, res) => {
  try {
    const brand = req.query.brand;
    let filter = {};
    if (brand) {
      filter.brand = brand;
    }
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
