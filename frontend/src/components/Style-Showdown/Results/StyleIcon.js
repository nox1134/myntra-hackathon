import React from 'react';
import './Results.css'; // Import Results.css for component-specific styles

function StyleIcon() {
  return (
    <>
    <div data-aos="fade-left" data-aos-duration="1500">
      <h2 className="text-[#1b0e17] text-[22px] font-bold leading-tight tracking-[-0.015em] ml-5 px-4 pb-3 pt-5" >Your Style Icon</h2>
      <div className="p-4 flex items-stretch gap-4 rounded-xl"  >
        <div className="flex flex-col gap-1">
          <p className="text-[#1b0e17] text-base font-bold leading-tight ml-5">Audrey Hepburn</p>
          <p className="text-[#974e7f] text-sm font-normal leading-normal ml-5">Breakfast at Tiffany's</p>
          <p className="text-[#1b0e17] text-base font-medium leading-normal ml-5">
            Audrey Hepburn is an icon of classic style and elegance. Her timeless fashion sense and roles in iconic films like Breakfast at Tiffany's have made her a cultural icon.
          </p>
        </div>
       
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 style-icon-image" data-aos="fade-right" data-aos-duration="1500"></div>
      </div>
      </div>
    </>
  );
}

export default StyleIcon;
