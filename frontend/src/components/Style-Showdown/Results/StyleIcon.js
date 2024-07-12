import React from 'react';

function StyleIcon() {
  return (
    <>
      <h2 className="text-[#1b0e17] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Your Style Icon</h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#1b0e17] text-base font-bold leading-tight">Audrey Hepburn</p>
              <p className="text-[#974e7f] text-sm font-normal leading-normal">Breakfast at Tiffany's</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#f3e7ef] text-[#1b0e17] text-sm font-medium leading-normal w-fit">
              <span className="truncate">Learn more</span>
            </button>
          </div>
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/97275f0f-708a-481b-8d0c-3216d21c7848.png")' }}></div>
        </div>
      </div>
    </>
  );
}

export default StyleIcon;
