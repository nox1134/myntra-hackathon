const express = require('express');
const router = express.Router();
const Product = require('../models/Outcome');
const ProductController = require('../controllers/ProductController');

// Get all products
router.get('/all', ProductController.getAllProducts); 

// Get products by category (for recommendation)
router.get('/recommendations', async (req, res) => {
  const { category } = req.query;
  const products = await Product.find({ category: { $in: category.split(',') } });
  res.json(products);
});

module.exports = router;
