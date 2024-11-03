import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHome,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { cartItem } = useSelector((state) => state.cart);
  
  return (
    <>
      <div className="flex justify-between text-gray-600 bg-blue-950 px-5 pt-4 pb-2 text-center font-mono font-extrabold text-3xl fixed top-0 w-full">
        <Link to="/">
          <h1 className="font-great-vibes font-extrabold text-4xl text-orange-500">
          SportyFit
          </h1>
        </Link>
        <div className="w-1/4  flex justify-between text-white">
          <div className="flex w-3/4  justify-around ">
            <Link to="/">
              <p className="font-Poppins font-bold text-xl  duration-600 delay-75  transform  hover:hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                Home
              </p>
            </Link>
            <Link to='/Products'>
              <p className="font-Poppins font-bold text-xl  duration-600 delay-75  transform  hover:hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                Store
              </p>
            </Link>
            <Link to='/Login'>
              <p className="font-Poppins font-bold text-xl  duration-600 delay-75  transform  hover:hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                Login
              </p>
            </Link>
          </div>


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
