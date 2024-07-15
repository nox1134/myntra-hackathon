const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  imageUrl: String,
  brand: String,
  productUrl: String
});

const outcomeSchema = new mongoose.Schema({
  outcome: String,
  url: String,
  products: [productSchema]
});

const Outcome = mongoose.model('Outcome', outcomeSchema);

module.exports = Outcome;
