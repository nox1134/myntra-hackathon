import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/quiz-landing');
  }
  return (
    <div className="header z-50">
      <div className="text-[#1b0e17] flex size-12 shrink-0 items-center left-icon" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" onClick={handleClick}>
          <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
        </svg>
      </div>
      <h2 className="text-[#1b0e17] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Style Aura</h2>
    </div>
  );
}

export default Header;
