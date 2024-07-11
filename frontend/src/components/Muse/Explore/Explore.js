import React from 'react';
import Header from '../Create/Header';
import Search from './Search';
import '../../../index.css';
import Allcards from './Allcards';

const Explore = () => {
  return (
    <div className="view-landing">
      <Header />
      <Search />
      <Allcards />
    </div>
  );
};

export default Explore;
