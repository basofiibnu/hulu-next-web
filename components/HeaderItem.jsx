import React from 'react';

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="hover:-text-white group flex w-12 cursor-pointer flex-col items-center sm:w-20">
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <p className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
