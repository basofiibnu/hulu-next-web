import React from 'react';

const DetailHeader = ({ data }) => {
  const releaseDate = data.release_date.split('-');
  if (!data) return <p>No data</p>;

  return (
    <div className="my-5 h-auto px-5 text-center md:px-10 md:text-left lg:px-12">
      <div className="xs:max-w-full pb-10 lg:max-w-3xl">
        <p className="mb-3 text-3xl font-bold text-white">
          {data.title}
        </p>
        <p className="mb-3 text-sm font-light">{data.overview}</p>
        <div className="mb-1 flex flex-col items-center gap-2 md:flex-row">
          <p className="text-sm font-bold">Starring By:</p>
          <p className="flex flex-row items-center gap-2 text-sm">
            {data.credits.cast.slice(0, 3).map((person) => (
              <p>{person.name}</p>
            ))}
          </p>
        </div>
        <div className="mb-3">
          {data.credits.crew.slice(0, 1).map((crew) => (
            <p className="text-sm">
              <span className="font-bold">
                {crew.department} By:{' '}
              </span>
              <span className="font-light">{crew.name}</span>
            </p>
          ))}
        </div>
        <div className="flex flex-row justify-center gap-2 text-sm font-light md:justify-start">
          {data.genres.map((genre) => (
            <p>{genre.name}</p>
          ))}
        </div>
        <div className="mb-3 text-sm font-light">
          <span>{releaseDate[0]} • </span>
          <span className="uppercase">{data.original_language}</span>
        </div>
        <p className="mb-4">
          Add STARZ® to any Hulu plan for an additional{' '}
          <span className="font-bold">$8.99/month.</span>
        </p>
        <div>
          <button
            type="button"
            className="rounded-md bg-gray-100 py-2 px-6 text-sm font-bold uppercase text-black hover:bg-gray-300"
          >
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
