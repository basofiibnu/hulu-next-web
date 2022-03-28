import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { XIcon } from '@heroicons/react/outline';

const SearchModal = ({ showModal, setShowModal }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  return (
    <Fragment>
      <div className="fixed top-0 z-50 mx-auto h-screen w-screen bg-black/70">
        <div className="absolute top-[30vh] md:left-1/4 lg:left-1/3">
          <div class="border-1 container mx-auto max-h-80 w-auto max-w-md rounded-lg border-gray-500 bg-gray-800 p-6">
            <div className="flex min-w-[400px] max-w-2xl items-center justify-between pb-5">
              <div className="text-lg font-semibold text-white">
                <p>Search Movie</p>
              </div>
              <div className="cursor-pointer">
                <XIcon
                  width={20}
                  height={20}
                  color="#fff"
                  onClick={() => {
                    setSearchText('');
                    setShowModal(!showModal);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <input
                type="text"
                placeholder="Type title e.g: spiderman..."
                className="w-full rounded-lg border-[1px] border-gray-500 bg-gray-600 py-3 px-3 outline-none focus:border-gray-400"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="mt-5 w-auto rounded-lg bg-gray-300 px-5 py-2.5 text-center text-sm font-medium text-gray-700 transition-all duration-150 ease-in-out hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed"
                type="button"
                disabled={searchText === ''}
                onClick={() => {
                  if (searchText !== '') {
                    router.push(`/search/${searchText}`);
                    setShowModal(!showModal);
                  }
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchModal;
