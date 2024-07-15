import React, { useState } from 'react';
import '../../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart, faShareNodes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleArrowClick = () => {
    window.location.href = '/explore'; // Replace '/desiredPage' with your desired page URL
  };

  return (
    <div className="header">
      <div className="left-icon" onClick={handleArrowClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="buttons">
        <FontAwesomeIcon 
          icon={liked ? faSolidHeart : faRegularHeart} 
          onClick={handleLikeClick} 
          className={liked ? 'liked' : 'unliked'}
        />
        <FontAwesomeIcon icon={faShareNodes} className="share-icon" />
      </div>
    </div>
  );
};

export default Header;
