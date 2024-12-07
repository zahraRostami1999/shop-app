import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../services/api";
import { useDispatch } from "react-redux";
import { AddToCart, removeFromCart, deleteFromCart } from "../redux/CartSlice";
import EmptyCartPage from "./EmptyCartPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartPage() {
  const [total, setTotal] = useState(0);
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProductItems(result);
    });
  }, []);

  useEffect(() => {
    let newTotal = 0;
    cartItem.forEach((item) => {
      const matchingProduct = productItems.find(
        (product) => item.id === parseInt(product.id)
      );
      if (matchingProduct) {
        newTotal += matchingProduct.price * item.qty;
      }
    });
    setTotal(newTotal);
  }, [cartItem, productItems]);

  localStorage.setItem("totalPrice", total);

  const displayCartItems = () => {
    return cartItem.map((item) => {
      const matchingProduct = productItems.find(
        (product) => item.id == parseInt(product.id)
      );
      if (matchingProduct) {
        return (
          <li
            key={matchingProduct.id}
            className="first:mt-20 flex flex-wrap justify-center items-center lg:w-11/12 md:w-11/12 w-full border-2 shadow-lg lg:px-10 md:px-8 px-2 py-3 lg:mb-10 md:mb-8 mb-5 rounded-lg"
          >
            <div className="flex items-start lg:w-11/12 md:w-11/12 w-full">
              <img
                className="w-1/4 lg:w-1/12 md:w-1/6 h-28 object-cover lg:ml-16 md:ml-10 ml-3"
                src={matchingProduct.image}
                alt={matchingProduct.title}
              />
              <h2 className="col-span-2 flex items-center text-left text-sm md:text-base lg:text-lg pl-5 font-semibold">
                {matchingProduct.title}
              </h2>
            </div>

            <div className="grid grid-cols-5 lg:grid-cols-5 gap-4 w-full lg:w-10/12 md:w-11/12 mt-4 lg:mt-0">
              
              <p className="font-semibold flex justify-center items-center text-sm md:text-base lg:text-lg">
                €{matchingProduct.price}
              </p>
              <div className="col-span-2 flex justify-center items-center h-10 rounded-3xl">
                <button
                  className="bg-orange-400 px-3 py-1.5 rounded-full font-mono font-semibold text-sm hover:bg-orange-500 mx-2"
                  onClick={() => dispatch(AddToCart(matchingProduct.id))}
                >
                  +
                </button>
                <p className="text-sm font-semibold">{item.qty}</p>
                <button
                  className="bg-gray-300 px-3 py-1.5 rounded-full font-mono font-semibold text-sm hover:bg-gray-400 mx-2"
                  onClick={() => dispatch(removeFromCart(matchingProduct.id))}
                >
                  -
                </button>
              </div>
              <p className="font-bold text-center text-sm md:text-base lg:text-xl mt-2">
                €{matchingProduct.price * item.qty}
              </p>
              <button
                onClick={() => dispatch(deleteFromCart(matchingProduct.id))}
                className="flex justify-center items-center text-red-400 hover:text-red-600 text-xl md:text-2xl lg:text-3xl"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>

        );
      }
    });
  };

  const confirmOrder = () => {
    return (
      <div className="min-h-screen lg:text-xl md:text-xl  text-base font-Poppins font-semibold flex flex-wrap lg:w-10/12 md:w-10/12 w-1/2 justify-between items-center pb-5 mb-10 border-gray-200 border-2 shadow-md lg:px-5 px-0 py-3 rounded-lg flex-grow">
        <div>
          <p>Your total Price is €{total}</p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 w-11/12 px-2 flex justify-around mx-auto">
          <Link to="/Checkout">
            <button className="bg-orange-500 hover:scale-105 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold py-3 lg:px-5 md:px-5 px-3 rounded-xl mt-6">
              Proceed to checkout
            </button>
          </Link>

          <Link to="/Products">
            <button className="bg-gray-300 lg:hover:scale-105 hover:bg-gray-400 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold py-3 lg:px-10 md:px-5 px-3 rounded-xl mt-6">
              Go back to store
            </button>
          </Link>
        </div>

      </div>
    );
  };

  return (
    <>
      <div className=" min-h-screen w-full flex justify-center items-center flex-wrap">
        <ul className="flex justify-center flex-wrap">
          {cartItem.length > 0 ? displayCartItems() : <EmptyCartPage />}
          {cartItem.length > 0 ? confirmOrder() : console.log(cartItem.length)}

        </ul>
      </div>
    </>
  );
}

export default CartPage;
