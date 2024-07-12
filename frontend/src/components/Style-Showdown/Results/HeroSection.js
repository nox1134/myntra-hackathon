import React from 'react';

function HeroSection() {
  return (
    <div className="@container @[480px]:px-4 @[480px]:py-3">
      <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#fcf8fa] @[480px]:rounded-xl min-h-80" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://cdn.usegalileo.ai/sdxl10/7fa0915c-96be-4383-8663-ca510b97a06e.png")' }}>
        <div className="flex p-4">
          <p className="text-white tracking-light text-[28px] font-bold leading-tight">Chic</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
