import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate= useNavigate();
  const handleScroll = () => {
    const bottomDiv = document.getElementById('bottom-div');
    if (bottomDiv) {
      bottomDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick=()=>{
    navigate('/quiz-page');
  }

  const pastQuizzes = [
    {
      id: 1,
      title: "Style Showdown",
      image: "https://via.placeholder.com/300x200?text=Style+Showdown",
      description: "Discover your ultimate style with our comprehensive quiz. Perfect for finding your fashion direction!"
    },
    {
      id: 2,
      title: "Fashion Fiesta",
      image: "https://via.placeholder.com/300x200?text=Fashion+Fiesta",
      description: "Join the fashion fiesta and see how your style compares to others. A fun way to find your fashion flair!"
    },
    {
      id: 3,
      title: "Trend Tracker",
      image: "https://via.placeholder.com/300x200?text=Trend+Tracker",
      description: "Keep up with the latest trends and find out how you measure up with our trend tracker quiz!"
    },
    {
      id: 4,
      title: "Style Evolution",
      image: "https://via.placeholder.com/300x200?text=Style+Evolution",
      description: "Track your style evolution over time with our engaging quiz!"
    },
    {
      id: 5,
      title: "Fashion Fusion",
      image: "https://via.placeholder.com/300x200?text=Fashion+Fusion",
      description: "Fuse different fashion elements and discover your unique style with our quiz!"
    },
    {
      id: 6,
      title: "Trendsetter's Quiz",
      image: "https://via.placeholder.com/300x200?text=Trendsetter's+Quiz",
      description: "Find out if you're a trendsetter with our exciting quiz!"
    },
  ];

  return (
    
    <>
      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col items-center text-center relative z-10">
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
          <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 " onClick={handleClick}>
            Take the Quiz
          </button>
          <div className="mt-12 animate-bounce">
            <button onClick={handleScroll} className="shimmer-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-400 hover:text-pink-600 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <div id="bottom-div" className="min-h-screen py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
            Past Quizzes
          </h2>
          <div className="relative">
            <div className="flex space-x-8 py-8 overflow-x-auto scrollbar-hidden">
              {pastQuizzes.map((quiz) => (
                <div key={quiz.id} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-xl border border-gray-200 transition-transform duration-300 transform hover:scale-105">
                  <img src={quiz.image} alt={quiz.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-semibold text-purple-800 mb-2">{quiz.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{quiz.description}</p>
                  <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                    View Details
                  </button>
                </div>
              ))}
            </div>
            <style jsx>{`
              .scrollbar-hidden::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hidden {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
              }
            `}</style>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
