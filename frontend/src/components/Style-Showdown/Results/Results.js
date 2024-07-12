import React from 'react';
import Header from '../Results/Header';
import HeroSection from '../Results/HeroSection';
import Description from '../Results/Description';
import StyleIcon from '../Results/StyleIcon';
import ShopButton from '../Results/ShopButton';
import ProductsSection from '../Results/ProductsSection';
import '../../../index.css';

function Results() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcf8fa] justify-between group/design-root overflow-x-hidden" style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}>
      <div>
        <Header />
        <HeroSection />
        <Description />
        <StyleIcon />
        <ProductsSection />
      </div>
      <ShopButton />
    </div>
  );
}

export default Results;
