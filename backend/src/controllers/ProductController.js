const Product = require('../models/Outcome');

const getAllProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10; // Number of products to return
    const skip = parseInt(req.query.skip) || 0; // Number of products to skip

    const products = await Product.find({}, 'id name price img') // Only select necessary fields
      .limit(limit)
      .skip(skip);

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllProducts };
