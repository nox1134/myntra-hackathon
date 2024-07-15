import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const bottomDivRef = useRef(null);

  const handleScroll = () => {
    if (bottomDivRef.current) {
      const scrollOffset = -50; // Adjust this offset as needed
      const targetPosition = bottomDivRef.current.offsetTop + scrollOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };
  const handleClick = () => {
    navigate("/quiz-page");
  };

  const pastQuizzes = [
    {
      id: 1,
      title: "Style Showdown",
      image: "https://via.placeholder.com/300x200?text=Style+Showdown",
      description:
        "Discover your ultimate style with our comprehensive quiz. Perfect for finding your fashion direction!",
    },
    {
      id: 2,
      title: "Fashion Fiesta",
      image: "https://via.placeholder.com/300x200?text=Fashion+Fiesta",
      description:
        "Join the fashion fiesta and see how your style compares to others. A fun way to find your fashion flair!",
    },
    {
      id: 3,
      title: "Trend Tracker",
      image: "https://via.placeholder.com/300x200?text=Trend+Tracker",
      description:
        "Keep up with the latest trends and find out how you measure up with our trend tracker quiz!",
    },
    {
      id: 4,
      title: "Style Evolution",
      image: "https://via.placeholder.com/300x200?text=Style+Evolution",
      description:
        "Track your style evolution over time with our engaging quiz!",
    },
    {
      id: 5,
      title: "Fashion Fusion",
      image: "https://via.placeholder.com/300x200?text=Fashion+Fusion",
      description:
        "Fuse different fashion elements and discover your unique style with our quiz!",
    },
    {
      id: 6,
      title: "Trendsetter's Quiz",
      image: "https://via.placeholder.com/300x200?text=Trendsetter's+Quiz",
      description: "Find out if you're a trendsetter with our exciting quiz!",
    },
  ];

  return (
    <>
      <main className="flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col items-center text-center relative z-10">
          <p className="text-sm text-gray-500 mb-3 tracking-widest leading-relaxed">
          <span className="text-white">STYLE SHOWDOWN QUIZ</span>
          </p>
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-white">Unleash Your</span> <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Style Aura
            </span>
            <br />
            <span className="text-white">Today!</span>
          </h1>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed text-light">
            Find your style of clothes your way!
          </p>
          <button
            className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
            onClick={handleClick}
          >
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
      <div ref={bottomDivRef} className="min-h-screen py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
            Past Quizzes
          </h2>
          <div className="relative">
            <div className="scroll-container">
              <div className="scroll-inner">
                {pastQuizzes.map((quiz) => (
                  <div key={quiz.id} className="card">
                    <img
                      src={quiz.image}
                      alt={quiz.title}
                      className="card-image"
                    />
                    <h3 className="card-title">{quiz.title}</h3>
                    <p className="card-description">{quiz.description}</p>
                    <button className="card-button">View Details</button>
                  </div>
                ))}
                {/* Duplicate content for infinite scroll */}
                {pastQuizzes.map((quiz) => (
                  <div key={`duplicate-${quiz.id}`} className="card">
                    <img
                      src={quiz.image}
                      alt={quiz.title}
                      className="card-image"
                    />
                    <h3 className="card-title">{quiz.title}</h3>
                    <p className="card-description">{quiz.description}</p>
                    <button className="card-button">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
