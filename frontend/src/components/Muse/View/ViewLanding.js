import React from 'react';
import Header from './Header';
import TitleSection from './Title';
import ImageGallery from './ImageTile';
import ShopTheLook from './ShopTheLook';
import '../../../index.css'

const ViewLanding = () => {
  return (
    <div className="bg-background text-foreground p-4">
      <Header />
      <TitleSection />
      <ImageGallery />
      <ShopTheLook />
    </div>
  );
};

export default ViewLanding;
