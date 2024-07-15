import "./Explore.css";
import React from "react";
import { Link } from "react-router-dom";
import Search from './Search';
import Card from './Card';
import Header from './Header';

const cards = [
  {
    image:
    "https://b2987718.smushcdn.com/2987718/wp-content/uploads/2024/02/70s-fashion-outfit-bohemian-style-3.png?lossy=2&strip=1&webp=1",
    title: "Boho Vibes",
    text: "A collection of boho outfits that are perfect for the summer. Think flowy silhouettes, earthy tones, and layered jewelry.",
  },
  {
    image:
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28752876/2024/4/7/ec452d84-68db-41eb-b9aa-3a2d2aeecdfb1712434266400BAESDNetMaxiDress1.jpg",
    title: "Party Perfect",
    text: "Glamorous outfits for every celebration.",
  },
  {
    image:
    "https://media.theeverygirl.com/wp-content/uploads/2022/01/the-everygirl-athleisure-outfits-feature-1.jpg",
    title: "Athleisure Goals",
    text: "Sporty yet fashionable looks for an active lifestyle.",
  },
  {
    image:
      "https://elle.in/wp-content/uploads/2024/04/Untitled-design-7.png",
    title: " Accessory Heaven",
    text: "Statement pieces to elevate any outfit.",
  },
  {
    image:
    "https://juvantage.com/wp-content/uploads/2023/11/denimcroppedjeans-1024x1024.webp",
    title: "Denim Dreams",
    text: "Classic and trendy denim styles for every occasion.",
  },
  {
    image:
      "https://i.pinimg.com/736x/95/67/1e/95671e4585c96b8abad8a5a54c1db627.jpg",
    title: "Workwear Essentials",
    text: "Discover stylish and professional workwear to elevate your office wardrobe.",
  },
  {
    image:
      "https://assets.vogue.com/photos/649b01f76d7f8002d20f80cd/4:3/w_1440,h_1080,c_limit/00-promo.jpg",
    title: "Street Style",
    text: "Get inspired by edgy and fashionable streetwear trends.",
  },
  {
    image:
      "https://frenchcrown.in/cdn/shop/articles/Retro_Outfit_Ideas_for_Modern_Men_1_1.jpg?v=1708587990&width=2048",
    title: "Vintage Vibes",
    text: "Discover timeless pieces with a modern twist inspired by vintage fashion.",
  },

];

const Explore = () => {
  return (
    <div className="view-landing">
      <Header />
      <Search />
      <div className="grid-container">
        <div className="grid-x grid-padding-x grid-margin-y">
          {cards.map((card, index) => (
            <div key={index} className="cell medium-3">
              <Card
                image={card.image}
                title={card.title}
                text={card.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;