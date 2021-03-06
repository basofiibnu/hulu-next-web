import React from 'react';

const HeaderItem = ({ title, Icon, onClick }) => {
  return (
    <div
      className="hover:-text-white group flex w-12 cursor-pointer flex-col items-center sm:w-20"
      onClick={onClick}
    >
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <p className="hidden text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 md:hidden lg:block">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
