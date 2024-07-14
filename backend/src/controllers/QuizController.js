// src/controllers/QuizController.js
const mongoose = require('mongoose');
const Question = require('../models/Quiz');

// Get all questions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific question by ID
const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new question
const addQuestion = async (req, res) => {
  const { questionText, options } = req.body;

  // Validate request body
  if (!questionText || !options || !Array.isArray(options) || options.length !== 4) {
    return res.status(400).json({ message: 'Invalid question or options format' });
  }

  const question = new Question({
    _id: new mongoose.Types.ObjectId(),
    questionText,
    options: options.map(option => ({
      _id: new mongoose.Types.ObjectId(),
      ...option
    }))
  });

  try {
    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a question by ID
const updateQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    const { questionText, options } = req.body;

    // Update question fields
    question.questionText = questionText || question.questionText;
    if (options) {
      question.options = options.map(option => ({
        _id: new mongoose.Types.ObjectId(), // Generate a new ID for each option if updated
        ...option
      }));
    }

    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a question by ID
const deleteQuestionById = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.json({ message: 'Question deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Export the controller functions
module.exports = {
  getAllQuestions,
  getQuestionById,
  addQuestion,
  updateQuestionById,
  deleteQuestionById
};
