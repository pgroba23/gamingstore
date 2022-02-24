import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <section>
      <ol className="flex flex-col text-center sm:flex-row sm:gap-6 sm:justify-center border-b-2">
        <NavLink
          to={`/category/pc`}
          className={({ isActive }) =>
            isActive ? 'bg-cyan-200 shadow-cyan-300 text-white shadow-lg' : ''
          }
        >
          <li className="px-4 py-2 hover:bg-cyan-200 hover:rounded hover:shadow-cyan-300 hover:text-white hover:shadow-lg transition-all cursor-pointer">
            Pc
          </li>
        </NavLink>
        <NavLink
          to={`/category/playstation`}
          className={({ isActive }) =>
            isActive ? 'bg-pink-200 shadow-pink-300 text-white shadow-lg' : ''
          }
        >
          <li className="px-4 py-2 hover:bg-pink-200 hover:rounded hover:shadow-pink-300  hover:text-white hover:shadow-lg transition-all cursor-pointer">
            Playstation
          </li>
        </NavLink>
        <NavLink
          to={`/category/nintendo`}
          className={({ isActive }) =>
            isActive
              ? 'bg-orange-200 shadow-orange-300 text-white shadow-lg'
              : ''
          }
        >
          <li className="px-4 py-2 hover:bg-orange-200 hover:rounded hover:shadow-orange-300  hover:text-white hover:shadow-lg transition-all cursor-pointer">
            Nintendo
          </li>
        </NavLink>
        <NavLink
          to={`/category/xbox`}
          className={({ isActive }) =>
            isActive ? 'bg-green-200 shadow-green-300 text-white shadow-lg' : ''
          }
        >
          <li className="px-4 py-2 hover:bg-green-200 hover:rounded hover:shadow-green-300  hover:text-white hover:shadow-lg transition-all cursor-pointer">
            XBox
          </li>
        </NavLink>
      </ol>
    </section>
  );
};
