// src/components/Create/Button.js
import React from 'react';
import './Create-muse.css';

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`form-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
