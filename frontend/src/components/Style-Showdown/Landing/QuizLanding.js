import React from 'react';
import Header from './Header';
import Main from './Main';
import Particles from './Particles'; // Adjust the path if necessary
import '../../../index.css';
import './landing.css';

const QuizLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 relative z-10">
      <Particles className="absolute inset-0 z-0" color="#333333" />
      <Header />
      <Main />
    </div>
  );
};

export default QuizLanding;
