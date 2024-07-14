import React from 'react';

const Content = ({ question, styles, onSelection, selectedOptionIndex }) => {

  const handleStyleClick = (index) => {
    onSelection(index);
  };

  return (
    <div>
      <p className="text-[#1b0e17] text-base font-normal leading-normal pb-3 pt-1 px-4">{question}</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {styles.map((style, index) => (
          <div key={style.name} className="flex flex-col gap-3 pb-3 group">
            <div
              className={`w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105 cursor-pointer ${selectedOptionIndex === index ? 'border-2 border-[#e71ea4]' : ''}`}
              style={{ backgroundImage: `url(${style.imageUrl})` }}
              onClick={() => handleStyleClick(index)}
            ></div>
            <p className="text-[#1b0e17] text-base font-medium leading-normal">{style.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
