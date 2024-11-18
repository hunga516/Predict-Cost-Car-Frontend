import React from 'react';
import TopCarHeader from './TopCarHeader';
import TopCarHero from './TopCarHero';
import TopCarSearch from './TopCarSearch';

const TopCarMain = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center py-10 pl-20 bg-white max-md:pl-5">
      <TopCarHeader />
      <TopCarHero />
      <TopCarSearch />
    </main>
  );
};

export default TopCarMain;