const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  outcomes: [{ type: String, required: true }] 
});

const QuizSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [optionSchema]
});

const Question = mongoose.model('Quiz', QuizSchema);
module.exports = Question;
