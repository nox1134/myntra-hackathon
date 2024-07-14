import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Particles from './Particles'; // Adjust the path if necessary
import '../../../index.css';
import './landing.css';

const QuizLanding = () => {
  useEffect(() => {
    const handlePointerMove = (e) => {
      const { currentTarget: el, clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
      el.style.setProperty('--posX',  x - l - w / 2);
      el.style.setProperty('--posY',  y - t - h / 2);
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
  return (
    <div className="landing">
    <div className="flex flex-col items-center justify-center p-4 relative z-10">
      <Particles className="absolute inset-0 z-0" color="#ffffff" />
      <Header />
      <Main />
    </div>
    </div>
  );
};

export default QuizLanding;
