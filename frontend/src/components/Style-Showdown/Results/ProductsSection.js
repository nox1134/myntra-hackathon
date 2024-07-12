import React from 'react';
import './Results.css'; // Ensure you import the styles

const products = [
  { id: 1, title: 'Classic Black Dress', brand: 'H & M', price: 'Rs. 1499', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/102a8cf2-c508-4564-82bf-9b46a9002d4a.png' },
  { id: 2, title: 'Minimalist White Dress', brand: 'Roadster', price: 'Rs. 999', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/752950c1-c6c7-4bfb-b373-a163f4b442ec.png' },
  { id: 3, title: 'Elegant Black Heels', brand: 'Zara', price: 'Rs. 1799', imageUrl: 'https://cdn.usegalileo.ai/sdxl10/a8188d19-515b-4599-8898-9af05764e7e5.png' },
  { id: 4, title: 'Shoulder Straps Bodycon Dress', brand: 'STYLECAST X KASSUALLY', price: 'Rs. 791', imageUrl: '/assets/ViewMuse/BlackDress.png' },
  { id: 5, title: 'Wrap Basic Jumpsuit with Belt', brand: 'MANGO', price: 'Rs. 4053', imageUrl: '/assets/ViewMuse/Jumpsuit.png' },
  { id: 6, title: 'Wrap Basic Jumpsuit with Belt', brand: 'MANGO', price: 'Rs. 4053', imageUrl: '/assets/ViewMuse/Jumpsuit.png' },
];

const ProductsSection = () => {
  return (
    <div className="shop-the-look" data-aos="fade-up" data-aos-duration="1500">
      <h2 className="title">Products for your style</h2>
      <div className="products-container">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              ></div>
               <p className="product-brand">{product.brand}</p>
              <p className="product-title">{product.title}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default ProductsSection;
