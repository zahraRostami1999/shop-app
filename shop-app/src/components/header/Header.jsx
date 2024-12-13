import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex justify-between text-white w-full bg-blue-950 fixed top-0 z-10">
        <div className="w-full ml-6 mr-2 my-3 flex justify-between">
          <div className="flex justify-start lg:w-2/5 2/4 md:w-3/5 w-5/6">
            <Link to="/">
              <h1 className="font-great-vibes lg:pr-5 md:mr-5 mr-0 text-2xl font-bold text-orange-500 sm:text-xl lg:font-extrabold md:font-extrabold sm:bold lg:text-4xl md:text-3xl">
                SportyFit
              </h1>
            </Link>
            <div className="pt-1.5 flex lg:w-4/5 md:full w-1/2 justify-around lg:justify-around md:justify-around ml-5 lg:text-lg md:text-base text-xs font-bold font-Poppins pt-1 ">
              <Link to="/">
                <p className="duration-600 delay-75  transform  hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                  Home
                </p>
              </Link>
              <Link to="/Products">
                <p className="duration-600 delay-75 transform hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                  Store
                </p>
              </Link>
            </div>
          </div>
          <div className="lg:w-28  md:w-24 sm:w-20 w-16 flex justify-between items-center text-white lg:text-3xl md:text-2xl sm:text-xl text-lg">
            <Link to="/Login">
              <div className="pb-1 ">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </div>
            </Link>
            <Link to="/cart">
              <div className="flex text-white hover:scale-105 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                <div className="bg-orange-500 rounded-full text-center text-xs sm:text-xs font-normal h-4 w-4 lg:h-5 lg:w-5 md:h-5 md:w-5 lg:py-0.5 md:py-0.5  lg:-translate-x-2 lg:-translate-y-4 sm:-translate-x-2  inline -translate-x-1.5 -translate-y-3 cursor-pointer">
                  <div className="font-mono font-medium">
                    {cartItem.length === 0 ||
                      cartItem === undefined ||
                      cartItem === null
                      ? 0
                      : cartItem.length}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;