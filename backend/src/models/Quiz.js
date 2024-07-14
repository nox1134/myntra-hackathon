const mongoose = require('mongoose');

const outcomeScoreSchema = new mongoose.Schema({
  outcome: { type: String, required: true },
  score: { type: Number, required: true }
});

const optionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  outcomeScores: [outcomeScoreSchema] 
});

const QuizSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [optionSchema] // Use the updated option schema
});

const Question = mongoose.model('Quiz', QuizSchema);

module.exports = Question;
