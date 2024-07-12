import React from 'react';

function ShopButton() {
  return (
    <>
      <div className="flex px-4 py-3">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#e71ea4] text-[#fcf8fa] text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Shop your style</span>
        </button>
      </div>
      <h2 className="text-[#1b0e17] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Products for your style</h2>
    </>
  );
}

export default ShopButton;
