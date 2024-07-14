import React, { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';
import '../../../index.css';
import '../Results/Results.css';

const QuizStarter = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selections, setSelections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/quiz/questions`);
        setQuestions(response.data);
        setSelections(Array(response.data.length).fill(false));
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
    const newSelections = [...selections];
    newSelections[currentQuestionIndex] = index !== null;
    setSelections(newSelections);
  };

  const progress = (selections.filter(selected => selected).length / questions.length) * 100;

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
      />
      <Footer
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
        progress={progress}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        isFirstQuestion={currentQuestionIndex === 0}
      />
    </div>
  );
};

export default QuizStarter;
