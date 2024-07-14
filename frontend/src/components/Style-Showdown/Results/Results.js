// Results.jsx
import React from "react";
import Header from "./Header";
import ShopButton from "../Results/ShopButton";
import ProductsSection from "../Results/ProductsSection";
import { NeonGradientCard } from "./NeonGradientCard";
import StyleIcon from "./styleIcon.jpg";
import { ConfettiSideCannons } from "./ConfettiSideCannons";
import "./Results.css";

const Results = () => {
  return (
    <div className="App">
      <Header />
      <div className="content p-8">
        <ConfettiSideCannons />
        <NeonGradientCard
          className="max-w-md mx-auto"
          heading="Style Icon"
          imageSrc={StyleIcon}
          subtitle="Audrey Hepburn from Breakfast at Tiffany's"
          description="This is the description of the card. It can be a bit longer to provide more information. This is the description of the card. It can be a bit longer to provide more information. This is the description of the card. It can be a bit longer to provide more information. This is the description of the card. It can be a bit longer to provide more information."
        />
      </div>
      <ProductsSection />
      <ShopButton />
    </div>
  );
};

export default Results;
