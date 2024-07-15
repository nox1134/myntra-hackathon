const mongoose = require('mongoose');

const MuseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  profileImage: { type: String, required: true },
  images: { type: [String], required: true },
  links: { type: [String], required: false }, // Adjusted to optional
  visibility: { type: String, required: true },
});

module.exports = mongoose.model('Muse', MuseSchema);
