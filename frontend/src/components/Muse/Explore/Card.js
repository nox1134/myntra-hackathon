import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, text }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    navigate("/view-muse");
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent navigation when the button is clicked
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__content">
        <p>{text}</p>
        <div className="card__actions">
          <div className="flex justify-between items-center">
            <button
              className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              onClick={(e) => {
                handleButtonClick(e);
                handleLikeClick(e);
              }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`h-5 w-5 ${liked ? "text-red-500" : ""}`}
              />
            </button>
            <button
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 transition-colors duration-200 ml-4"
              onClick={handleButtonClick}
            >
              <FontAwesomeIcon icon={faShareAlt} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
