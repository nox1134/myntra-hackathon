import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Card = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/view-muse');
    };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 mx-3 " onClick={handleClick}>
      <img
        src="https://placehold.co/600x400"
        alt="Card"
        className="w-full h-80 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">Card Title</h3>
        <p className="text-sm text-gray-600 mb-4">
          A brief description of the card content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <FontAwesomeIcon icon={faHeart} className="h-5 w-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <FontAwesomeIcon icon={faShareAlt} className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
