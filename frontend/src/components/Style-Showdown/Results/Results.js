import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import ShopButton from '../Results/ShopButton';
import ProductsSection from '../Results/ProductsSection';
import { NeonGradientCard } from './NeonGradientCard';
import StyleIcon from './styleIcon.jpg';
import { ConfettiSideCannons } from './ConfettiSideCannons';
import './Results.css';

const Results = () => {
  const [outcome, setOutcome] = useState('');

  useEffect(() => {
    const fetchOutcome = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/response/latest`);
        setOutcome(response.data.outcome);
      } catch (error) {
        console.error('Error fetching outcome:', error);
      }
    };

    fetchOutcome();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content p-8">
        <ConfettiSideCannons />
        <NeonGradientCard
          className="max-w-md mx-auto"
          heading={outcome}
          imageSrc={StyleIcon}
          subtitle="Audrey Hepburn from Breakfast at Tiffany's"
          description="This is the description of the card. It can be a bit longer to provide more information."
        />
      </div>
      <ProductsSection />
      <ShopButton />
    </div>
  );
};

export default Results;
