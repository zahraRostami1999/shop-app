import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSignOut,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/UserSlice";
import { RootState } from "../../redux/Store";

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoggedIn = localStorage.getItem("isLoggedIn") || "";
  const isLoggedIn = LoggedIn ? JSON.parse(LoggedIn) : false;

  

  const handleLoginIcon = () => {
    if (isLoggedIn) {
      return (
        <FontAwesomeIcon icon={faSignOut} size="1x" onClick={handleSignOut} />
      );
    } else {
      return <FontAwesomeIcon icon={faUser} size="1x" onClick={handleLogin} />;
    }
  };

  const handleSignOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="flex justify-between text-neutral-900 w-full bg-white fixed top-0 z-10">
        <div className="w-full ml-6 mr-2 my-3 py-0.5 flex justify-between">
          <div className="flex justify-start lg:w-2/5 2/4 md:w-3/5 w-5/6">
            <h1 className="font-great-vibes lg:pr-5 md:mr-5 mr-0 text-2xl font-bold text-rose-900 sm:text-2xl lg:font-extrabold md:font-extrabold sm:bold lg:text-4xl md:text-3xl">
              ChicMarket
            </h1>
          </div>
          <div className="lg:w-32 pb-1 sm:pb-1 md:w-32 sm:w-28 w-28 flex justify-between items-center text-neutral-700 lg:text-2xl md:text-xl sm:text-base text-base">
            <div className="hover:scale-105 transition duration-200 ease-in-out">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </div>
            <div className="flex justify-center items-center hover:scale-105 transition duration-200 ease-in-out">
              {handleLoginIcon()}
            </div>
            <Link to="/Handle">
              <div className="flex hover:scale-105 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                <div className="bg-rose-900 text-white rounded-full text-center lg:text-[11px] text-[9px] font-semibold h-3 w-3 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:w-3 sm:h-3 lg:py-0.5 md:py-0.5 lg:-translate-x-2 lg:-translate-y-3 md:-translate-x-1 md:-translate-y-3 sm:-translate-x-1  inline -translate-x-1 -translate-y-2 cursor-pointer">
                  <div className=" lg:-translate-y-2 md:-translate-y-2 sm:-translate-y-1.5 -translate-y-1.5 flex justify-center items-center">
                    {cartItems.length === 0 ||
                    cartItems === undefined ||
                    cartItems === null
                      ? 0
                      : cartItems.length}
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
