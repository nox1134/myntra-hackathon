import React, { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';
import '../../../index.css';
import '../Results/Results.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const QuizStarter = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selections, setSelections] = useState([]);
  const [scores, setScores] = useState({});
  const [tempScores, setTempScores] = useState({
    'Chic Trendsetter': 0,
    'Classic Elegance': 0,
    'Street Style Star': 0,
    'Bohemian Beauty': 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/quiz/questions`);
        setQuestions(response.data);
        setSelections(Array(response.data.length).fill(null));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelection = (index) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion || !currentQuestion.options || !currentQuestion.options[index]) {
      console.error('Selected option is undefined');
      return;
    }

    const selectedOption = currentQuestion.options[index];
    const prevSelectionIndex = selections[currentQuestionIndex];
    const updatedScores = { ...scores };
    const updatedTempScores = { ...tempScores };

    // Remove score impact of previously selected option
    if (prevSelectionIndex !== null && prevSelectionIndex >= 0 && prevSelectionIndex < currentQuestion.options.length) {
      const prevOption = currentQuestion.options[prevSelectionIndex];
      if (prevOption && prevOption.outcomeScores) {
        prevOption.outcomeScores.forEach(({ outcome, score }) => {
          updatedScores[outcome] = (updatedScores[outcome] || 0) - score;
          if (outcome in updatedTempScores) {
            updatedTempScores[outcome] -= score;
          }
        });
      }
    }

    // Add score impact of currently selected option
    if (selectedOption.outcomeScores) {
      selectedOption.outcomeScores.forEach(({ outcome, score }) => {
        updatedScores[outcome] = (updatedScores[outcome] || 0) + score;
        if (outcome in updatedTempScores) {
          updatedTempScores[outcome] += score;
        }
      });
    }

    // Update selections
    setSelections(prevSelections => {
      const newSelections = [...prevSelections];
      newSelections[currentQuestionIndex] = index;
      return newSelections;
    });

    // Update scores
    setScores(updatedScores);
    setTempScores(updatedTempScores);
  };

  const handleSubmit = async () => {
    try {
      console.log('Final Scores:', scores);
      const maxScore = Math.max(...Object.values(scores));
      const finalOutcome = Object.keys(scores).find(outcome => scores[outcome] === maxScore);
  
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/response`, {
        outcome: finalOutcome,
      });
  
      navigate('/quiz-results'); 
  
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const progress = (selections.filter(selected => selected !== null).length / questions.length) * 100;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!questions.length) return <div>No questions available</div>;

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fcf8fa] justify-between overflow-x-hidden" style={{ fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif" }}>
      <Header title="Myntra Style Showdown" />
      <Content
        question={questions[currentQuestionIndex].questionText}
        styles={questions[currentQuestionIndex].options}
        onSelection={handleSelection}
        selectedOptionIndex={selections[currentQuestionIndex]}
      />
      <Footer
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
        progress={progress}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        isFirstQuestion={currentQuestionIndex === 0}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default QuizStarter;
