import React from 'react';

const Navigation = () => {
  return (
    <nav className="sm:fixed top-[21cm] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white/35 backdrop-blur-lg rounded-lg shadow-lg z-20 hidden sm:flex items-center justify-center">
      <ul className="flex items-center justify-center gap-8 font-play-fair text-white/75">
        {['Home', 'Work', 'About', 'Contact'].map((item) => (
          <li key={item} className="text-lg cursor-pointer hover:text-white active:text-white">
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
