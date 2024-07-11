import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mx-2 sm:mx-4 lg:mx-6 my-4">
      <img
        src="https://placehold.co/600x400"
        alt="Card"
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-sm text-gray-600 mb-4">
          A brief description of the card content goes here. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faHeart} className="h-4 w-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faShareAlt} className="h-4 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
