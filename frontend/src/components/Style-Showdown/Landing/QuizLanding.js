import React from 'react';
import Header from './Header'; // Ensure correct path
import Main from './Main'; // Ensure correct path
import '../../../index.css';

const QuizLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 relative z-10">
      <Header />
      <Main />
    </div>
  );
};

export default QuizLanding;
