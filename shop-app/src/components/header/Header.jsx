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
      <div className="flex justify-between text-slate-700 bg-red-50 p-4 text-center font-mono font-extrabold text-3xl fixed top-0 w-full">
        <Link to="/">
          <h1 className="font-great-vibes font-extrabold text-4xl">
            Moonlit Couture
          </h1>
        </Link>
        <div className="w-1/5  flex justify-between">
          <div className="flex w-3/4  justify-around ">
            <Link to="/">
              <p className="font-sans font-bold text-xl">Home</p>
            </Link>
            <Link>
              <p className="font-sans font-bold text-xl">Shop</p>
            </Link>
          </div>

          <Link to="/cart">
            <div className="flex">
              <FontAwesomeIcon icon={faShoppingCart} size="x" />
              <div className="bg-red-400 rounded-3xl text-xs font-thin h-5 px-2 py-0.5 inline -translate-x-3 -translate-y-3 cursor-pointer">
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
