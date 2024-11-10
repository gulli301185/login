const Register = () => {
  return (
    <div className=" flex flex-col lg:space-y-20 space-y-8 justify-center items-center bg-blue-800 py-8">
      <div className=" lg:flex lg:justify-around lg:flex-row flex-col flex items-center lg:space-y-8 space-y-4 w-full">
        <img
          width={250}
          height={250}
          className=""
          src="https://banner2.cleanpng.com/20180825/cka/kisspng-logo-node-js-heroku-scalable-vector-graphics-font-mode-analytics-status-change-notifications-1713948947624.webp"
          alt=""
        />
        <div className="flex lg:flex-row flex-col items-center lg:text-xl text-md gap-3 lg:gap-8 font-semibold text-gray-300">
          <span>Already have an account?</span>
          <button className="py-2 px-6 hover:bg-slate-300 hover:text-blue-700 bg-blue-900 rounded-md">
            Log in
          </button>
        </div>
      </div>
      <div className="space-y-10 lg:w-1/2 w-[90%] ">
        <h1 className="text-gray-300 lg:text-3xl text-lg font-sans leading-relaxed whitespace-pre-line flex justify-center">
          {` Sign up for free and\n experience Heroku today`}
        </h1>
        <div className="bg-slate-300 flex lg:flex-row flex-col  rounded-lg shadow-lg relative">
          <div className="lg:w-1/2 w-full">
            <div className="flex flex-col justify-center p-10 space-y-8 ">
              <div className="flex space-x-6">
                <img
                  className=""
                  width={50}
                  height={50}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWlGIee16kO-iJJUfkgvGPGLa9uneVhPBUg&s"
                  alt="*"
                />
                <span className="text-md lg:text-lg text-gray-500 font-bold shadow-lg">
                  Free Account
                </span>
              </div>
              <p className=" text-gray-700 text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </p>
              <div className="border-b-2 border-gray-400  shadow-lg"></div>
            </div>
            <div className="flex flex-col justify-center p-10 space-y-8  ">
              <div className="flex space-x-6">
                <img
                  className=""
                  width={50}
                  height={50}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWlGIee16kO-iJJUfkgvGPGLa9uneVhPBUg&s"
                  alt="*"
                />
                <span className="text-md lg:text-lg text-gray-500 font-bold shadow-lg">
                  Free Account
                </span>
              </div>
              <p className=" text-gray-700 text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </p>
              <div className="border-b-2 border-gray-400  shadow-lg"></div>
            </div>
            <div className="flex flex-col justify-center p-10 space-y-8  ">
              <div className="flex space-x-6">
                <img
                  className=""
                  width={50}
                  height={50}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWlGIee16kO-iJJUfkgvGPGLa9uneVhPBUg&s"
                  alt="*"
                />
                <span className="text-md lg:text-lg text-gray-500 font-bold shadow-lg">
                  Free Account
                </span>
              </div>
              <p className=" text-gray-700 text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </p>
              <div className="border-b-2 border-gray-400  shadow-lg"></div>
            </div>
          </div>
          <div className="bg-white my-8 rounded-lg  shadow-2xl lg:-right-24 lg:relative  max-w-96">
            <div className="m-6  space-y-10 mb-12 ">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-400 font-bold text-base mb-2"
                >
                  First name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-2 pl-4 pr-20 rounded-lg  border-gray-300 border-2 shadow-md"
                  placeholder="Name..."
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-400 font-bold text-base mb-2"
                >
                  Last name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-2 pl-4 pr-20 rounded-lg  border-gray-300 border-2 shadow-md truncate"
                  placeholder="Last name..."
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-400 font-bold text-base mb-2"
                >
                  Email adress <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-2 pl-4 pr-20 rounded-lg  border-gray-300 border-2 shadow-md"
                  placeholder="Email..."
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-400 font-bold text-base mb-2"
                >
                  Company name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-2 pl-4 pr-20 rounded-lg  border-gray-300 border-2 shadow-md truncate"
                  placeholder="Company name..."
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="role"
                  className="text-gray-400 font-bold text-base mb-2"
                >
                  Role <span className="text-red-600">*</span>
                </label>
                <select
                  placeholder="role"
                  className="w-full shadow-md py-2 rounded-md border-2 border-gray-300 hover:border-gray-300 bg-slate-100"
                >
                  <option value="region"></option>
                  <option value="region"></option>
                  <option value="region"></option>
                  <option value="region"></option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-400 font-bold text-base mb-2"
                >
                  Region <span className="text-red-600">*</span>
                </label>
                <select
                  placeholder=""
                  className="w-full shadow-md py-2 rounded-md border-2 border-gray-300 hover:border-gray-300 bg-gray-100"
                >
                  <option value="region"></option>
                  <option value="region"></option>
                  <option value="region"></option>
                  <option value="region"></option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-400 font-bold text-base mb-2"
                >
                  Language <span className="text-red-600">*</span>
                </label>
                <select
                  name="sellect a language"
                  id="name"
                  className="w-full shadow-md py-2 rounded-md border-2 border-gray-300 hover:border-gray-300 bg-gray-100"
                >
                  <option value="region"></option>
                  <option value="region"></option>
                  <option value="region"></option>
                  <option value="region"></option>
                </select>
              </div>
              <div className=" bg-slate-100  flex lg:justify-between lg:flex-row items-center justify-center space-y-4 lg:space-y-0 flex-col w-full min-h-32 lg:p-2 rounded-md shadow-md border-gray-300 border-2">
                <div className="flex   space-x-2 items-center">
                  <input type="checkbox" className=" w-6 h-6" />
                  <p className="text-gray-400 text-lg font-serif ">{`I'm not a robot`}</p>
                </div>
                <div className=" flex mr-8 lg:mr-0">
                  <img
                    className="object-contain "
                    width={50}
                    height={50}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWlGIee16kO-iJJUfkgvGPGLa9uneVhPBUg&s"
                    alt="*"
                  />
                  <div className="text-gray-400 text-sm">
                    <p>reCHAPTCHA</p>
                    <p>Privacy - Terms</p>
                  </div>
                </div>
              </div>
              <button className="py-4  w-full bg-blue-800 text-gray-100 leading-relaxed rounded-md lg:text-lg text-sm uppercase ">
                Create free account
              </button>
              <p className="text-gray-400 font-serif">
                Signing up signifies that you have read and agree to the{" "}
                <a href="" className="text-blue-500 underline font-serif">
                  Terms of Service{" "}
                </a>{" "}
                and our{" "}
                <a href="" className="text-blue-500 underline font-serif">
                  Privacy Policy
                </a>{" "}
                <a href="" className="text-blue-500 underline font-serif">
                  {" "}
                  Cookie Preferences
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
