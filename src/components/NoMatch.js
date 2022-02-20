import React from 'react';
import { Link } from 'react-router-dom';

export const NoMatch = () => {
  return (
    <div className="flex flex-col justify-center mt-4">
      <span className="bg-black text-center text-white uppercase text-2xl ">
        Ups! Wrong url =(
      </span>
      <div className="text-lg rounded text-center mt-4">
        <span className="bg-green-200 py-2 px-4 rounded font-bold text-center cursor-pointer hover:bg-green-400">
          <Link to="/">Go to the home page</Link>
        </span>
      </div>
    </div>
  );
};
