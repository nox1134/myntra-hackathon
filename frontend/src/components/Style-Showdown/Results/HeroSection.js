import React from 'react';
import './Results.css'; // Import the Results.css file

function HeroSection() {
  return (
    <div className="mx-4 @container @[480px]:px-4 @[480px]:py-3 view-landing">
      <div className="hero-section" data-aos="fade-up" data-aos-duration="1500">
        <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#fcf8fa] @[480px]:rounded-xl min-h-96 rounded-xl">
          <div className="flex p-4">
            <p className="text-white tracking-light text-[28px] font-bold leading-tight">Chic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
