import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="flex flex-col text-center p-4 mt-8 sm:flex-row sm:gap-6 sm:justify-around text-white bg-slate-800">
      <div>
        <span>©</span> 2022 MARCA Content Design Inc. - All rights reserved
      </div>
      <div>
        <Link to={'/'}>Made with ❤️ at MARCA</Link>
      </div>
    </footer>
  );
};
