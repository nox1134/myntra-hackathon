import React from 'react';

const Main = () => {
  return (
    <main className="flex flex-col items-center text-center mt-24 relative z-10 px-4">
      <p className="text-sm text-gray-500 mb-3 tracking-widest leading-relaxed">
        STYLE SHOWDOWN QUIZ
      </p>
      <h1 className="text-6xl font-extrabold mb-6 leading-tight">
        Unleash Your <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Style Aura
        </span>
        <br />
        Today!
      </h1>
      <p className="text-gray-500 mb-10 text-lg leading-relaxed">
        Find your style of clothes your way!
      </p>
      <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
        Take the Quiz
      </button>
    </main>
  );
};

export default Main;
