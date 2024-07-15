import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import Card from './Card';

const Explore = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:7001/api/muse/getAll');
        setCards(response.data);
        const imagePath=response.data.profileImage;
        console.log('Image URL:', `http://localhost:7001/uploads/${imagePath}`);
      } catch (error) {
        console.error('Error fetching board data:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="view-landing">
      <Header />
      <Search />
      <div className="grid-container">
        <div className="grid-x grid-padding-x grid-margin-y">
          {cards.map((card, index) => {
            // Normalize the profileImage path
            const imagePath = card.profileImage.startsWith('./')
              ? card.profileImage.slice(2) // Remove './'
              : card.profileImage;

            // Display profile image
            return (
              <div key={index} className="cell medium-3">
                <Card
                  image={`http://localhost:7001/uploads/${imagePath}`} // Construct the image URL
                  title={card.title}
                  text={card.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
