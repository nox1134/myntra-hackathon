import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import ShopButton from '../Results/ShopButton';
import ProductsSection from '../Results/ProductsSection';
import { NeonGradientCard } from './NeonGradientCard';
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
          imageSrc="https://i.redd.it/priyanka-chopra-in-dil-dhadakne-do-2015-styled-by-arjun-v0-403ve5v85y6b1.jpg?width=976&format=pjpg&auto=webp&s=2b3f9deb6107893fe870553c2c8ad9d22f0be7ca"
          subtitle="Priyanka Chopra from Dil Dhadakne Do"
          description="Congratulations! You are a Chic Trendsetter. Sleek, sophisticated, and always on point, your wardrobe is filled with blazers, shirts, trousers, and bodysuits. Layered necklaces and a chic crossbody bag are your signature accessories. This season, rock those chunky sneakers and neon colors with confidence, and continue to turn heads wherever you go."
        />
      </div>
      <ProductsSection products={products} /> 
      <ShopButton url={outcomeUrl} />
    </div>
  );
};

export default Results;
