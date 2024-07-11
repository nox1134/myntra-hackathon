
import React from 'react';
import '../../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      
      <div className="buttons">
        
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faShareNodes} />
        
      </div>
    </div>
  );
};

export default Header;
