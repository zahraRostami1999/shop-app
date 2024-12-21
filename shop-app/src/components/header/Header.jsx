import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/UserSlice";

function Header() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handleSignOut = ()=>{
    dispatch(logOut());
    alert('You have signed out')
  }

  return (
    <>
      <div className="flex justify-between text-white w-full bg-neutral-800 fixed top-0 z-10">
        <div className="w-full ml-6 mr-2 my-3 py-0.5 flex justify-between">
          <div className="flex justify-start lg:w-2/5 2/4 md:w-3/5 w-5/6">
            <Link to="/">
              <h1 className="font-great-vibes lg:pr-5 md:mr-5 mr-0 text-2xl font-bold text-gold sm:text-xl lg:font-extrabold md:font-extrabold sm:bold lg:text-4xl md:text-3xl">
              ChicMarket
              </h1>
            </Link>
          </div>
          <div className="text-white lg:w-24 pb-1 sm:pb-1  md:w-24 sm:w-20 w-16 flex justify-between items-center text-white lg:text-2xl md:text-2xl sm:text-xl text-lg">
            <div className="flex justify-center items-center pb0.5 hover:scale-105 transition duration-200 ease-in-out" onClick={()=>handleSignOut()}>
              <FontAwesomeIcon icon={faSignOut} size="1x" />
            </div>
            <Link to="/Handle">
              <div className="flex hover:scale-105 transition duration-200 ease-in-out">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                <div className="bg-gold rounded-full text-center text-xs font-thin h-4 w-4 lg:h-5 lg:w-5 md:h-5 md:w-5 lg:py-0.5 md:py-0.5 text-black lg:-translate-x-2 lg:-translate-y-3 sm:-translate-x-2  inline -translate-x-1.5 -translate-y-3 cursor-pointer">
                  <div className="font-mono ">
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