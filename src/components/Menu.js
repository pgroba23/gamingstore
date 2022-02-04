export const Menu = () => {
  return (
    <section>
      <ol className="flex flex-col text-center sm:flex-row sm:gap-6 sm:justify-center border-b-2">
        <li className="px-4 py-2 hover:bg-cyan-200 hover:rounded hover:shadow-cyan-300 hover:text-white hover:shadow-lg transition-all cursor-pointer">
          Pc
        </li>
        <li className="px-4 py-2 hover:bg-pink-200 hover:rounded hover:shadow-pink-300  hover:text-white hover:shadow-lg transition-all cursor-pointer">
          Playstation
        </li>
        <li className="px-4 py-2 hover:bg-orange-200 hover:rounded hover:shadow-orange-300  hover:text-white hover:shadow-lg transition-all cursor-pointer">
          Nintendo
        </li>
        <li className="px-4 py-2 hover:bg-green-200 hover:rounded hover:shadow-green-300  hover:text-white hover:shadow-lg transition-all cursor-pointer">
          XBox
        </li>
      </ol>
    </section>
  );
};
