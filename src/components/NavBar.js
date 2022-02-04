export const NavBar = () => {
  return (
    <header className="p-3 font-black font-mono text-2xl text-white bg-slate-800 grid grid-cols-1 sm:grid-cols-3">
      <h1 className="justify-self-center mb-4 sm:my-2 sm:justify-self-start">
        M a r c a
      </h1>
      <nav>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-cyan-500 focus:outline-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Buscar..."
            placeholder="Buscar..."
          />
        </form>
      </nav>
    </header>
  );
};
