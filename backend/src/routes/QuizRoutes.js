
const express = require('express');
const router = express.Router();
const QuizController = require('../controllers/QuizController');


router.get('/questions', QuizController.getAllQuestions);
router.get('/questions/:id', QuizController.getQuestionById);
router.post('/questions', QuizController.addQuestion);
router.put('/questions/:id', QuizController.updateQuestionById);
router.delete('/questions/:id', QuizController.deleteQuestionById);

module.exports = router;
