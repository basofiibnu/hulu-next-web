import React from 'react';
import Thumbnail from './Thumbnail';

const Results = ({ data }) => {
  console.log(data);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="px-10 lg:px-12">
      <div>
        {data?.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
