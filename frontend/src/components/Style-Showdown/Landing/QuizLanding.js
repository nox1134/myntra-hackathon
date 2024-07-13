import React from 'react';
import Header from './Header'; 
import Main from './Main'; 
import '../../../index.css';
import './landing.css'

const QuizLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 relative z-10">
      <Header />
      <Main />
    </div>
  );
};

export default QuizLanding;
