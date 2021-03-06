import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Thumbnail = forwardRef(({ result, detail }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <Link
      href={{
        pathname: '/detail/[id]',
        query: { id: result.id },
      }}
    >
      <div
        ref={ref}
        className="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105"
      >
        <Image
          src={
            `${BASE_URL}${
              result.backdrop_path || result.poster_path
            }` || `${BASE_URL}${result.poster_path}`
          }
          layout="responsive"
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className={`max-w-md truncate ${detail && 'text-sm'}`}>
            {result.overview}
          </p>
          <h2
            className={`mt-1 ${
              detail ? 'text-lg' : 'text-2xl'
            } text-white transition-all duration-100 ease-in-out group-hover:font-bold`}
          >
            {result.title || result.original_name}
          </h2>
          <p
            className={`mt-1 flex cursor-pointer items-center capitalize opacity-0 transition-opacity duration-100 ease-in-out group-hover:opacity-100 ${
              detail && 'text-sm'
            }`}
          >
            {result.media_type && `${result.media_type} • `}
            {result.release_date || result.first_air_date} •
            <ThumbUpIcon className="mx-2 h-5" /> {result.vote_count}
          </p>
        </div>
      </div>
    </Link>
  );
});

export default Thumbnail;
