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
      title: "Which Bollywood Celebrity Is Your Style Twin?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6IYZ_kTSVQT1VAGqEbecYrN481IrpxwaB-Xg0vSAcAkqgDIJVHWI79RPxQkRAskfQg0&usqp=CAU",
      description:
        "Take this quiz to discover which Bollywood celebrity shares your fashion sense and style vibes! Explore iconic looks and find your celebrity style match in the world of Indian cinema.",
    },
    {
      id: 2,
      title: "Fashion Fortune Teller: Discover Your Style Destiny!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1psCgr1noPuYfhrKSOJi2QNuj2900DcvBeg&s",
      description:
        "Peek into your future closet and uncover the fashion trends that define your signature look.",
    },
    {
      id: 3,
      title: "Discover Your Bollywood Movie Match!",
      image: "https://images.mid-day.com/images/images/2023/oct/jabwemetanniv2023_7.jpg",
      description:
        "Take this quiz to find out which Bollywood movie perfectly matches your personality and style! Dive into the world of Indian cinema and uncover your cinematic soulmate.",
    },
    {
      id: 4,
      title: "Which Fashion Season Are You?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlb84pWAwAdF17wqJcH-izbuuAN_TE7IACwqd3cgzQmnH9h7bwAxmeygnGTwEJPCf9Fh0&usqp=CAU",
      description:
        "Explore your wardrobe personality and uncover whether you embody the vibrant hues of summer, the cozy layers of autumn, the crisp styles of winter, or the fresh blooms of spring.",
    },
    {
      id: 5,
      title: "Style Alchemist: Transform Your Fashion Elements!",
      image: "https://i98fm.com.au/images/sized/media/news/potions_bar-700x350.jpg",
      description:
        "Mix and match your fashion elements to uncover the alchemical blend that creates your signature style magic."
    },
    {
      id: 6,
      title: "What's Your Fashion Aura?",
      image: "https://t4.ftcdn.net/jpg/05/51/96/35/360_F_551963598_53hrJ2UXDoC00XhkqJ8lKN8Xa2EQg4no.jpg",
      description: "Explore the colors of your fashion aura and discover the style vibes that define your wardrobe palette.",
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
          <span className="text-white">Which</span> <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Fashion Perona
            </span>
            <br />
            <span className="text-white">Are You?</span>
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
