import React from 'react';
import '../../../index.css';

const outfitClasses = "w-full h-auto rounded-lg shadow-md transform transition-transform group-hover:scale-105";
const overlayClasses = "absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center";
const buttonClasses = "bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/80 transition-colors";

const images = [
  "https://i.pinimg.com/originals/3b/9d/96/3b9d96b4ba44503c78964d45c027f2c6.png",
  "https://media.vogue.co.uk/photos/664202da27b5ec4ce42540e3/2:3/w_2560%2Cc_limit/GettyImages-1685513552.jpg",
  "https://i.pinimg.com/736x/70/50/70/7050705c6d763a9e98ab0dc74f413e99.jpg",
  "https://i.pinimg.com/736x/3e/c3/7d/3ec37dd558aad5ac6bcb1b67c108cd56.jpg",
  "https://i.pinimg.com/736x/b9/ca/c0/b9cac0ad82f692152fd88ce890d1ec19.jpg",
  "https://www.desiblitz.com/wp-content/uploads/2024/05/10-Bold-Clothing-Styles-for-Indian-Women-8.jpg",
  "https://i.pinimg.com/736x/d2/a3/66/d2a366b64c646e67e990a69378b2ad7e.jpg",
  "https://i.pinimg.com/564x/49/f2/93/49f293ccabfef7210814a6398da13c93.jpg",
  ];

const ImageTile = () => {
  return (
    <div className="bg-background text-foreground p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img src={image} alt={`outfit ${index + 1}`} className={outfitClasses} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTile;
