const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  outcome: { type: String, required: true }
});

const UserResponse = mongoose.model('UserResponse', userResponseSchema);

module.exports = UserResponse;
