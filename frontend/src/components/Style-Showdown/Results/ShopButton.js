import React from 'react';
import './Results.css';

function ShopButton() {
  return (
    <>
      <div className="shop-button-container mb-4">
        <button className="shop-button">
          <span className="truncate">Shop your style</span>
        </button>
      </div>
    </>
  );
}

export default ShopButton;
