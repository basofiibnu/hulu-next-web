import React from 'react';
import { useRouter } from 'next/router';
import requests from '../utils/fetchApi';

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex max-w-full space-x-10 overflow-x-scroll whitespace-nowrap px-10 text-lg scrollbar-hide sm:space-x-10 sm:px-20 md:space-x-11 md:px-10 lg:px-12">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transform cursor-pointer transition-all duration-100  hover:scale-125 hover:text-white active:text-red-400"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
};

export default Nav;
