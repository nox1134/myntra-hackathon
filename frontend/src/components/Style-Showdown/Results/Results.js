import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Header from '../Results/Header';
import HeroSection from '../Results/HeroSection';
import StyleIcon from '../Results/StyleIcon';
import ShopButton from '../Results/ShopButton';
import ProductsSection from '../Results/ProductsSection';
import './Results.css';

function Results() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcf8fa] justify-between group/design-root overflow-x-hidden" style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}>
      {showConfetti && <Confetti className={`confetti-container ${!showConfetti ? 'confetti-fade-out' : ''}`} />}
      <div>
        <Header />
        <HeroSection />
        <StyleIcon />
        <ProductsSection />
      </div>
      <ShopButton />
    </div>
  );
}

export default Results;
