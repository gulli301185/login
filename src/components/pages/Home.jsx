import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <nav className="bg-pink-300 container py-8 mx-auto">
        <div className="flex justify-between ">
          <Link to="/login" className="lg:p-2 lg:px-6 rounded-full hover:bg-pink-500 hover:text-white">
            LOGIN
          </Link >
          <div>
            <ul className="lg:flex lg:justify-between hidden cursor-pointer">
              <Link
                to="/about"
                className="lg:p-2 lg:px-6 rounded-full hover:bg-pink-500 hover:text-white"
              >
                About
              </Link>
              <Link
                to="/number"
                className="lg:p-2 lg:px-6 rounded-full hover:bg-pink-500 hover:text-white"
              >
                Number
              </Link>
              <Link
                to="/adress"
                className="lg:p-2 lg:px-6 rounded-full hover:bg-pink-500 hover:text-white"
              >
                Adress
              </Link>
            </ul>
          </div>
          <div className="lg:hidden">
            <div className="border-black border w-10 mb-2"></div>
            <div className="border-black border w-10 mb-2"></div>
            <div className="border-black border w-10 mb-2"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
