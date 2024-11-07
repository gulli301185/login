export const Login = () => {
  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="bg-pink-300 p-8 space-y-8 rounded-lg">
        <h1 className="text-sm lg:text-3xl text-gray-700 font-bold text-center pb-0 lg:pb-8">
          Login
        </h1>
        <div className="flex flex-col w-52 lg:w-96">
          <label htmlFor="email" className="text-lg text-gray-800">
            email
          </label>
          <input
            type="text"
            id="email"
            className="py-2  pl-2 w-full rounded-md shadow-2xl ring-1 ring-slate-600"
            placeholder="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg text-gray-800">
            password
          </label>
          <input
            type="text"
            id="password"
            className="py-2  pl-2 w-full rounded-md shadow-2xl ring-1 ring-slate-600"
            placeholder="password"
          />
        </div>

        <button className="bg-pink-400 py-2 w-full rounded-md shadow-pink-950 shadow-2xl text-lg text-pink-950 leading-loose font-bold">
          Register
        </button>
      </div>
    </div>
  );
};
