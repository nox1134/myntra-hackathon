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
      <div className="main-content p-8">
        <ConfettiSideCannons />
        <NeonGradientCard className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold">Hello, World!</h1>
          <p>This is a neon gradient card component with a white background.</p>
        </NeonGradientCard>
      </div>
      <ProductsSection />

      <ShopButton />
    </div>
  );
};

export default Results;
