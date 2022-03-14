export const FormComponent = ({ clear, total, handleSubmit }) => {
  return (
    <div className="mt-2 max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <label className="block">
            <span className="text-gray-700">Full name</span>
            <input
              type="text"
              name="name"
              id="name"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Phone</span>
            <input
              type="number"
              name="phone"
              id="phone"
              className="mt-1
            form-input
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block col-span-1 md:col-span-2">
            <span className="text-gray-700">Email address</span>
            <input
              type="email"
              name="email"
              id="email"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
              placeholder="john@example.com"
            />
          </label>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row mt-8 gap-y-2">
          <button
            className="py-2 px-4 bg-slate-300 hover:bg-slate-700 text-white font-bold rounded-sm"
            onClick={clear}
          >
            Vaciar Carrito
          </button>
          <button
            type="submit"
            className="py-2 px-4 ml-4 bg-slate-300 hover:bg-slate-700 text-white font-bold rounded-sm"
          >
            Finalizar Compra
          </button>
          <h1 className="ml-4 px-4 py-2 bg-green-200 select-none">
            Total: ${total}
          </h1>
        </div>
      </form>
    </div>
  );
};
