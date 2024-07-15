import React from 'react';
import './Results.css'; 

const ProductsSection = ({ products = [] }) => { // Set default empty array
  return (
    <div className="shop-the-look products-section" data-aos="fade-up" data-aos-duration="1500">
      <h2 className="title">Products for your style</h2>
      <div className="products-container">
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <a 
                key={product.id}
                href={product.productUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="product-card"
              >
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                ></div>
                <div className="product-info">
                  <p className="product-brand">{product.brand}</p>
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">{product.price}</p>
                </div>
              </a>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
