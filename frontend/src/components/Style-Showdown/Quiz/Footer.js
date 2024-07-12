import React from 'react';

const Footer = ({ onNextClick, progress }) => {
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
      </div>
      <div className="flex px-4 py-3">
        <button onClick={onNextClick} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#e71ea4] text-[#fcf8fa] text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Next</span>
        </button>
      </div>
      <div className="h-5 bg-[#fcf8fa]"></div>
    </div>
  );
};

export default Footer;
