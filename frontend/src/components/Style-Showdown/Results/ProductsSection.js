import React from 'react';

function ProductsSection() {
  return (
    <>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/102a8cf2-c508-4564-82bf-9b46a9002d4a.png")' }}></div>
            <p className="text-[#1b0e17] text-base font-medium leading-normal">Classic Black Dress</p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/752950c1-c6c7-4bfb-b373-a163f4b442ec.png")' }}></div>
            <p className="text-[#1b0e17] text-base font-medium leading-normal">Minimalist White Dress</p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/a8188d19-515b-4599-8898-9af05764e7e5.png")' }}></div>
            <p className="text-[#1b0e17] text-base font-medium leading-normal">Elegant Black Heels</p>
          </div>
        </div>
      </div>
      <div className="h-5 bg-[#fcf8fa]"></div>
    </>
  );
}

export default ProductsSection;
