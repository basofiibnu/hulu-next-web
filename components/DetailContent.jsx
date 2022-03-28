import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Thumbnail from './Thumbnail';
import { Rings } from 'react-loader-spinner';

const DetailContent = ({ data }) => {
  const [openTab, setOpenTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);

  const getSimilarMovies = async (id) => {
    setLoading(true);
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const baseUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;

    const response = await fetch(baseUrl);
    const res = await response.json();
    setSimilarMovies(res.results);
    console.log(res);

    setLoading(false);
  };

  useEffect(() => {
    getSimilarMovies(data.id);
  }, [data.id]);

  return (
    <div className="xs:px-3 mb-5 h-auto md:px-10 lg:px-12">
      <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        <li className="mr-2">
          <span
            onClick={() => setOpenTab(1)}
            aria-current="page"
            className={`${
              openTab === 1
                ? 'border-b-2 border-b-white text-white'
                : 'text-gray-400'
            } inline-block cursor-pointer rounded-t-lg py-4 px-4 text-center text-sm font-medium uppercase tracking-widest transition-all duration-300 ease-in-out hover:text-white`}
          >
            You may also like
          </span>
        </li>
        <li className="mr-2">
          <span
            onClick={() => setOpenTab(2)}
            className={`${
              openTab === 2
                ? 'border-b-2 border-b-white text-white'
                : 'text-gray-400'
            } inline-block cursor-pointer rounded-t-lg  py-4 px-4 text-center text-sm font-medium uppercase tracking-widest transition-all duration-300 ease-in-out hover:text-white`}
          >
            Details
          </span>
        </li>
      </ul>

      <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg">
        <div className="flex-auto px-4 py-5 md:px-0">
          {loading ? (
            <div className="flex w-full items-center justify-center">
              <Rings color="#6B7280" height={80} width={80} />
            </div>
          ) : (
            <div className="tab-content tab-space">
              {openTab === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, type: 'tween' }}
                  exit={{ opacity: 0 }}
                  className={`${
                    openTab === 1 ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-500 ease-in-out`}
                >
                  <div className="flex-wrap justify-center sm:grid md:grid-cols-2 lg:grid-cols-5 3xl:flex">
                    {similarMovies &&
                      similarMovies.length > 0 &&
                      similarMovies.map((movie) => (
                        <Thumbnail
                          key={movie.id}
                          result={movie}
                          detail={true}
                        />
                      ))}
                  </div>
                </motion.div>
              )}
              {openTab === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, type: 'tween' }}
                  exit={{ opacity: 0 }}
                  className={`${
                    openTab === 2 ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-500 ease-in-out`}
                >
                  <div className="xs:max-w-full pb-10 lg:max-w-3xl">
                    <p className="mb-3 text-lg font-semibold text-white">
                      About This Movie
                    </p>
                    <p className="mb-3 text-3xl font-bold text-white">
                      {data.title}
                    </p>
                    {data.tagline !== '' && (
                      <p className="mb-3 text-lg font-semibold text-white">
                        {data.tagline}
                      </p>
                    )}
                    <p className="text-md mb-3 font-light">
                      {data.overview}
                    </p>
                    <div className="mb-1 flex flex-row items-center gap-2">
                      <p className="text-md font-bold">
                        Starring By:
                      </p>
                      <p className="text-md flex flex-row items-center gap-2">
                        {data.credits.cast
                          .slice(0, 3)
                          .map((person) => (
                            <p>{person.name}</p>
                          ))}
                      </p>
                    </div>
                    <div className="mb-1">
                      {data.credits.crew.slice(0, 1).map((crew) => (
                        <p className="text-md">
                          <span className="font-bold">
                            {crew.department} By:{' '}
                          </span>
                          <span className="font-light">
                            {crew.name}
                          </span>
                        </p>
                      ))}
                    </div>
                    <div className="text-md mb-1 flex flex-row gap-2 font-light">
                      <p className="font-bold">Genres: </p>
                      {data.genres.map((genre) => (
                        <p>{genre.name}</p>
                      ))}
                    </div>
                    <div className="text-md mb-1 flex flex-row gap-2 font-light">
                      <p className="font-bold">Release Date: </p>
                      <p>{data.release_date}</p>
                    </div>
                    <div className="text-md mb-1 flex flex-row gap-2 font-light">
                      <p className="font-bold">
                        Original Languages:{' '}
                      </p>
                      <p className="uppercase">
                        {data.original_language}
                      </p>
                    </div>
                    <div className="text-md mb-1 flex flex-row gap-1 font-light">
                      <p className="font-bold">Produced By: </p>
                      {data.production_companies
                        .slice(0, 3)
                        .map((studio) => (
                          <p>{studio.name}</p>
                        ))}
                    </div>
                    {data.homepage && (
                      <div className="text-md mb-1 flex flex-row gap-2 font-light">
                        <p className="font-bold">
                          Official Website:{' '}
                        </p>
                        <p>
                          <a
                            href={data.homepage}
                            rel="noreferrer"
                            target="_blank"
                            className="hover:text-white"
                          >
                            {data.homepage}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
