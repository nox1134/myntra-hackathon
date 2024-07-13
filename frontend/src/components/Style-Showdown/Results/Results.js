// src/components/Results/Results.jsx
import React from 'react';
import Header from './Header';
import ShopButton from '../Results/ShopButton';
import ProductsSection from '../Results/ProductsSection';
import './Results.css';
import { NeonGradientCard } from './NeonGradientCard';
import { ConfettiSideCannons } from './ConfettiSideCannons'; // Adjust the import path if necessary

const Results = () => {
  return (
    <div className="App">
      <Header />
      <div className="content p-8">
        <ConfettiSideCannons />
        <NeonGradientCard
          className="max-w-md mx-auto"
          heading="Amazing Title"
          imageSrc="https://via.placeholder.com/150"
          subtitle="Subtitle Here"
          description="This is the description of the card. It can be a bit longer to provide more information."
        />
      </div>
      <ProductsSection />
      <ShopButton />
    </div>
  );
};

export default Results;
