import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CardWidget } from './CardWidget';

export const NavBar = () => {
  return (
    <header className="p-3 font-black font-mono text-2xl text-white bg-slate-800 grid grid-cols-1 sm:grid-cols-2">
      <Link
        to={'/'}
        className="justify-self-center mb-4 sm:my-2 sm:justify-self-start"
      >
        <h1>M a r c a</h1>
      </Link>

      <div className="justify-self-center sm:justify-self-end">
        <CardWidget />
      </div>
    </header>
  );
};
