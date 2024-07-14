const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  img: String,
  price: Number,
  mrp: Number,
  rating: Number,
  ratingTotal: Number,
  discount: Number,
  seller: String,
  purl:String
});

module.exports = mongoose.model('Product', ProductSchema);
