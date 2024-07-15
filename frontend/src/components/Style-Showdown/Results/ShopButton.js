import React from 'react';
import './Results.css';

function ShopButton({ url }) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="shop-button-container mb-4">
      <button className="shop-button" onClick={handleClick}>
        <span className="truncate">Shop your style</span>
      </button>
    </div>
  );
}

export default ShopButton;
