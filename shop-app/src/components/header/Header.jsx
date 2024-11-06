import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/IsLogin";

function Header() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSignOutClick = () => {
    dispatch(logoutUser());
    alert("You have been logged out");
  };

  return (
    <>
      <div className="flex justify-between text-white bg-blue-950 px-5 pt-4 pb-2 text-center font-mono font-extrabold text-3xl fixed top-0 w-full">
        <div className="flex justify-between w-1/4">
          <Link to="/">
            <h1 className="font-great-vibes font-extrabold text-4xl text-orange-500">
              SportyFit
            </h1>
          </Link>
          <div className="flex w-3/5 justify-around ml-5 text-lg font-bold font-Poppins pt-1 ">
            <Link to="/">
              <p className="duration-600 delay-75  transform  hover:hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                Home
              </p>
            </Link>
            <Link to="/Products">
              <p className="duration-600 delay-75  transform  hover:hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                Store
              </p>
            </Link>
            <Link to="/Login">
              <p className="duration-600 delay-75  transform  hover:hover:border-b-2 hover:scale-110 transition duration-200 ease-in-out hover:border-white">
                Login
              </p>
            </Link>
          </div>
        </div>

        <div className="w-28 flex justify-between text-white">
          <div onClick={handleSignOutClick} className="cursor-pointer">
            <FontAwesomeIcon icon={faSignOutAlt} />
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
