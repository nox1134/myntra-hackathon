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
  const [products, setProducts] = useState([]);
  const [outcomeUrl, setOutcomeUrl] = useState('');

  useEffect(() => {
    const fetchOutcome = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/response/latest`);
        const out=response.data.outcome;
        if(!out){
            console.error('Error fetching outcome');
        }
        const outcomeName=encodeURIComponent(out);
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/outcome/${outcomeName}`);
        setOutcome(res.data.outcome);
        setProducts(res.data.products); 
        setOutcomeUrl(res.data.url);
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
      <ProductsSection products={products} /> 
      <ShopButton url={outcomeUrl} />
    </div>
  );
};

export default Results;
