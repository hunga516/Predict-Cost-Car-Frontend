import React from 'react';

const TopCarHeader = () => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1170px] min-h-[44px] max-md:max-w-full">
      <h1 className="self-stretch my-auto text-2xl italic font-extrabold leading-none text-red-500">
        TOPCAR
      </h1>
      <nav className="flex gap-10 items-start self-stretch my-auto text-base font-medium leading-loose min-w-[240px] text-stone-500 max-md:max-w-full">
        <a href="/" className="gap-2 self-stretch py-4 border-b-2 border-solid border-b-stone-700 text-stone-900">Home Page</a>
        <a href="/rent" className="gap-2 self-stretch py-4">Rent Car</a>
        <a href="/buy" className="gap-2 self-stretch py-4">Buy Car</a>
        <a href="/news" className="gap-2 self-stretch py-4 whitespace-nowrap">News</a>
      </nav>
      <button className="gap-2 self-stretch px-4 my-auto w-28 text-sm font-semibold leading-loose text-white bg-red-500 rounded-lg min-h-[40px]">
        Sign in
      </button>
    </header>
  );
};

export default TopCarHeader;