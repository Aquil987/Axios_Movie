import React from 'react';

const Card = ({ movieData }) => {
  const { Poster, imdbID } = movieData;

  return (
    <li className="flex flex-col  items-center rounded shadow-md hover:shadow-lg transition-transform hover:scale-105 h-auto">
      {/* Main Container */}
      <div className="w-[300px]  rounded overflow-hidden">
        {/* Poster Container */}
        <div className="w-full h-[350px]  overflow-hidden flex justify-center bg-slate-200">
          <img
            src={Poster}
            alt={imdbID}
            className="w-full h-full p-4"
          />
        </div>
        {/* Ticket Container */}
        <div className=" text-center bg-gray-100 w-full">
          <a href={`/movie/${imdbID}`} className='w-full'>
            <button className="bg-gray-500 w-full  text-white px-4 py-2 text-lg rounded hover:bg-gray-700 transition">
              Watch Now
            </button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Card;
