import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex justify-between text-white w-full bg-blue-950 fixed top-0 z-10">
        <div className="w-full mx-6 my-3 flex justify-between">
          <div className="flex justify-between lg:w-2/5 2/4 md:w-3/5">
            <Link to="/">
              <h1 className="font-great-vibes lg:pr-5 md:mr-5 mr-0 text-2xl font-bold text-orange-500 sm:text-xl lg:font-extrabold md:font-extrabold sm:bold lg:text-4xl md:text-3xl">
                SportyFit
              </h1>
            </Link>
            <div className="flex lg:w-4/5 md:full w-full justify-between lg:justify-around md:justify-around ml-5 lg:text-lg md:text-base text-xs font-bold font-Poppins pt-1 ">
              <Link to="/">
                <p className="duration-600 delay-75  transform  hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                  Home
                </p>
              </Link>
              <Link to="/Products">
                <p className="duration-600 delay-75  transform hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                  Store
                </p>
              </Link>
            </div>
          </div>
          <div className="lg:w-20 md:w-20 lg:w-1/12 w-12 flex justify-end items-center text-white text-2xl">
            <Link to="/cart">
              <div className="flex text-white hover:scale-105 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                <div className="bg-orange-500 rounded-full text-xs font-normal h-5 px-2 py-0.5 inline -translate-x-2 -translate-y-3 cursor-pointer">
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