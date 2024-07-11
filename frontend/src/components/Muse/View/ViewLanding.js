import React from 'react';
import Header from './Header';
import TitleSection from './Title';
import ImageTile from './ImageTile';
import ShopTheLook from './ShopTheLook';
import '../../../index.css';

const ViewLanding = () => {
  return (
    <div className="view-landing bg-background text-foreground">
      <Header />
      <TitleSection />
      <ImageTile />
      <ShopTheLook />
    </div>
  );
};

export default ViewLanding;
