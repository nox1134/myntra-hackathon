const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Reference to the user
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Reference to the question
  selectedOptionId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Reference to the selected option
  selectedOptionName: { type: String, required: true }, // Name of the selected option
  outcomeScores: [
    {
      outcome: { type: String, required: true },
      score: { type: Number, required: true }
    }
  ]
});

const UserResponse = mongoose.model('UserResponse', userResponseSchema);

module.exports = UserResponse;
