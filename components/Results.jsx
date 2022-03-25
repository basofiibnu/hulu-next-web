import React from 'react';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

const Results = ({ data }) => {
  if (!data) return <p>No movie data found</p>;

  return (
    // <div className="px-10">
    <FlipMove className="my-5 flex-wrap justify-center sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {data?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
    // </div>
  );
};

export default Results;
