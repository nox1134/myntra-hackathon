import React from 'react';
import '../../../index.css';

const outfitClasses = "w-full h-auto rounded-lg shadow-md transform transition-transform group-hover:scale-105";
const overlayClasses = "absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center";
const buttonClasses = "bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/80 transition-colors";

const ImageTile = () => {
  return (
    <div className="bg-background text-foreground p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* First Row */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative group">
            <img src={`https://placehold.co/200x300?text=outfit${index + 1}`} alt={`outfit ${index + 1}`} className={outfitClasses} />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative group">
            <img src={`https://placehold.co/200x300?text=outfit${index + 6}`} alt={`outfit ${index + 6}`} className={outfitClasses} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTile;
