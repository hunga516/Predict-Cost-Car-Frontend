import React, { useState } from 'react';

const TopCarHero = () => {
  
  const LIST_CARS = [
    {
      url: "/public/sony.png",
      bg: '#333'
    },
    {
      url: "/public/sony.png",
      bg: '#fff'
    },
    {
      url: "/public/sony.png",
      bg: '#666'
    },
    {
      url: "/public/sony.png",
      bg: '#999'
    }
  ]
  const [carImg, setCarImg] = useState(LIST_CARS[0])

  console.log(carImg.url);
  
  
  const handleNextCar = () => {
    setCarImg(prev => LIST_CARS[prev + 1])
  }

  return (
    <section className="self-end mt-20 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[75%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-14 max-md:mt-10">
            <h2 className="text-6xl font-bold text-red-500 lowercase leading-[66px] max-md:text-4xl max-md:leading-[49px]">
              <span className="uppercase">B</span>UY, SELL & RENT <br />
              <span className="text-red-500">REPUTABLE CARS</span>
            </h2>
            <p className="mt-10 text-lg font-medium leading-7 text-orange-950">
              Buy and sell reputable cars. Renting a car is easy and fast with Topcar
            </p>
            <div className="flex gap-8 items-start self-start mt-10">
              <div className="flex flex-col justify-center">
                <div className="text-4xl font-bold leading-none text-stone-700">50+</div>
                <div className="mt-4 text-base font-medium leading-loose text-stone-500">Car brands</div>
              </div>
              <div className="shrink-0 w-0 border border-solid bg-zinc-300 border-zinc-300 h-[55px]" />
              <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="text-4xl font-bold leading-none text-stone-700">10k+</div>
                <div className="mt-4 text-base font-medium leading-loose text-stone-500">Clients</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
          {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a293220c263a5274fa9a705b188d3470ea44e396c841ba47648f984dba80b079?apiKey=0f38df9da2834ce78ff98df9da825ead&" alt="Showcase of TopCar vehicles" className="object-contain grow w-full aspect-[1.36] max-md:mt-10 max-md:max-w-full" /> */}
          <img loading="lazy" src={carImg.url} alt="Showcase of TopCar vehicles" className="object-contain grow w-full aspect-[1.36] max-md:mt-10 max-md:max-w-full" />
          <div className='container-arrow flex items-center gap-2 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='previous-arrow p-2'>
              <p className='text-base font-medium leading-6'>Trước</p>
            </div>
            <div className='next-arrow' onClick={handleNextCar}>
            <p className='text-base px-4 py-1 rounded-full font-medium leading-6 ring-1 ring-slate-400'>Tiếp theo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCarHero;