import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex justify-between text-white bg-blue-950 lg:px-5 pt-4 pb-2 text-center font-mono font-extrabold text-3xl fixed top-0 w-full z-10">
        <div className="flex justify-between lg:w-1/3 w-3/4 md:w-1/2">
          <Link to="/">
            <h1 className="font-great-vibes lg:mr-5 md:mr-5 mr-0 text-2xl font-bold text-orange-500 sm:text-xl lg:font-extrabold md:font-extrabold sm:bold lg:text-4xl md:text-3xl">
              SportyFit
            </h1>
          </Link>
          <div className="flex lg:w-3/5 w-full justify-around lg:justify-around md:justify-around ml-5 lg:text-lg md:text-lg text-sm font-bold font-Poppins pt-1 ">
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

        <div className="lg:w-20 md:w-20 lg:w-20 w-12 flex justify-between text-white">
          <Link to="/cart">
            <div className="flex text-white hover:scale-105 transition duration-200 ease-in-out">
              <FontAwesomeIcon icon={faShoppingCart} size="1x" />
              <div className="bg-orange-500 rounded-3xl text-xs font-normal h-5 px-2 py-0.5 inline -translate-x-3 -translate-y-3 cursor-pointer">
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
    </>
  );
}

export default Header;