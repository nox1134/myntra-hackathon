import React from 'react';

const Footer = ({ onNextClick, onPreviousClick, progress, isLastQuestion, isFirstQuestion }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-end">
          <p className="text-[#1b0e17] text-sm font-normal leading-normal">{progress}%</p>
        </div>
        <div className="rounded bg-[#e7d0df]">
          <div className="h-2 rounded bg-[#e71ea4]" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-[#974e7f] text-sm font-normal leading-normal">Complete to earn Myntra credits</p>
        <div className="flex justify-between pt-4">
          <button
            className={`bg-[#e71ea4] text-white py-2 px-4 rounded-md transition-transform duration-300 transform ${!isFirstQuestion ? 'hover:scale-105' : ''}`}
            onClick={onPreviousClick}
            disabled={isFirstQuestion}
          >
            Previous
          </button>
          {isLastQuestion ? (
            <button
              className="bg-[#e71ea4] text-white py-2 px-4 rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-[#e71ea4] text-white py-2 px-4 rounded-md transition-transform duration-300 transform hover:scale-105"
              onClick={onNextClick}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
