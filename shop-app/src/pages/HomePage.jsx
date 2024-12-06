import cover from "../assets/images/HomePage.jpeg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <div className="w-full flex flex-wrap justify-between lg:pt-28 md:pt-24 py-20 lg:px-10 px-2">
        <div className="lg:h-screen md:h-full h-full w-full">
          <img className="bg-cover lg:w-2/3 md:w-5/6 lg:h-5/6 md:h-5/6 w-11/12 mx-auto" src={cover} />
        </div>
        <div className=" font-Poppins lg:pl-10 pl-0 pt-2">
          <h1 className=" my-5 lg:mb-10 mb-2 text-lg font-semibold lg:text-3xl md:text-3xl lg:font-bold md:font-bold text-gray-800">
            Welcome to SportyFit sports store!
          </h1>
          <p className="lg:my-20 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-gray-700 ">
            <p>
              Find the best in sportswear and fashion here! From comfortable
              t-shirts and functional pants to yoga and running apparel.
            </p>
            <p className="lg:my-5 my-0">
              With brands like Nike, Adidas, Puma, and Reebok, you can always
              look your best in style and performance.
            </p>
          </p>
          <Link to="/Products">
            <div className="w-full lg:w-5/6 md-2/3 lg:my-16 md:my-10 my-10 flex justify-center">
              <button className="bg-orange-500 w-2/3 py-3 rounded-lg lg:font-semibold md:font-semibold lg:text-lg md:text-lg text-xs shadow-lg shadow-slate-300 text-white hover:scale-105 transition duration-300">
                Buy now and enjoy the sport
              </button>
            </div>
          </Link>
        </div>

      </div>
    </>
  );
}

export default HomePage;
