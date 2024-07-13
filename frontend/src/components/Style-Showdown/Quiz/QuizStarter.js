import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../../../index.css'
import '../Results/Results.css'

const questions = [
  { question: 'Question 1: What describes your fashion personality best?', styles: [
    { name: 'Classic Chic', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/c0084a1c-b490-41c0-b3e5-424699eda817.png' },
    { name: 'Trendsetter', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/635583d0-58d4-4d3b-86d3-520efe413e67.png' },
    { name: 'Sporty Spice', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/697b452a-3a05-469d-95a3-72373ccce093.png' },
    { name: 'Free Spirit', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/a72cfd16-6723-45fb-a7b0-ee3025902b5c.png' },
  ] },
 {
    question: 'Question 2: What is likely to be your go-to outfit for a casual day out?', styles: [
        { name: 'Denim & Tee', imageUrl: 'https://i.pinimg.com/564x/56/9a/26/569a2619a3ab2854fa5e9da08f984ccf.jpg' },
        { name: 'Flowy Dress', imageUrl: 'https://i.pinimg.com/564x/80/54/ab/8054ab7bfd7059b815eb988b39e7850d.jpg' },
        { name: 'Joggers & Hoodie', imageUrl: 'https://i.pinimg.com/564x/80/82/eb/8082eb1af4b9f4881415c1059ba3b3c5.jpg' }, 
        { name: 'Skirt & Tank Top', imageUrl: 'https://i.pinimg.com/564x/9a/72/e5/9a72e5204c17cb25bdd14729484ad55f.jpg' },
    ]
},

  { question: 'Question 3: What describes your fashion personality best?', styles: [
    { name: 'Classic Chic', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/c0084a1c-b490-41c0-b3e5-424699eda817.png' },
    { name: 'Trendsetter', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/635583d0-58d4-4d3b-86d3-520efe413e67.png' },
    { name: 'Sporty Spice', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/697b452a-3a05-469d-95a3-72373ccce093.png' },
    { name: 'Free Spirit', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/a72cfd16-6723-45fb-a7b0-ee3025902b5c.png' },
  ] },
  {
    question: 'Question 4: What is likely to be your go-to outfit for a casual day out?', styles: [
        { name: 'Denim & Tee', imageUrl: 'https://i.pinimg.com/564x/56/9a/26/569a2619a3ab2854fa5e9da08f984ccf.jpg' },
        { name: 'Flowy Dress', imageUrl: 'https://i.pinimg.com/564x/80/54/ab/8054ab7bfd7059b815eb988b39e7850d.jpg' },
        { name: 'Joggers & Hoodie', imageUrl: 'https://i.pinimg.com/564x/80/82/eb/8082eb1af4b9f4881415c1059ba3b3c5.jpg' }, 
        { name: 'Skirt & Tank Top', imageUrl: 'https://i.pinimg.com/564x/9a/72/e5/9a72e5204c17cb25bdd14729484ad55f.jpg' },
    ]
},
  { question: 'Question 5: What describes your fashion personality best?', styles: [
    { name: 'Classic Chic', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/c0084a1c-b490-41c0-b3e5-424699eda817.png' },
    { name: 'Trendsetter', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/635583d0-58d4-4d3b-86d3-520efe413e67.png' },
    { name: 'Sporty Spice', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/697b452a-3a05-469d-95a3-72373ccce093.png' },
    { name: 'Free Spirit', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/a72cfd16-6723-45fb-a7b0-ee3025902b5c.png' },
  ] },
  
  // Add more questions here...
];

const QuizStarter = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selections, setSelections] = useState(Array(questions.length).fill(false));
  
    const handleNextClick = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handlePreviousClick = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        const progress = (selections.filter(selected => selected).length / questions.length) * 100;
      }
    };
  
    const handleSelection = (index) => {
      const newSelections = [...selections];
      newSelections[currentQuestionIndex] = index !== null;
      setSelections(newSelections);
    };
  
    const progress = (selections.filter(selected => selected).length / questions.length) * 100;
  
    return (
      <div className="relative flex min-h-screen flex-col bg-[#fcf8fa] justify-between overflow-x-hidden" style={{ fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif" }}>
        <Header title="Myntra Style Showdown" />
        <Content
          question={questions[currentQuestionIndex].question}
          styles={questions[currentQuestionIndex].styles}
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