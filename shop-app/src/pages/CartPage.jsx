import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../services/api";
import { useDispatch } from "react-redux";
import { AddToCart, removeFromCart, deleteFromCart } from "../redux/CartSlice";
import EmptyCartPage from "./EmptyCartPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartPage() {

  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProductItems(result);
    });
  }, []);

  const displayCartItems = () => {
    return cartItem.map((item) => {
      const matchingProduct = productItems.find(
        (product) => item.id == parseInt(product.id)
      );
      if (matchingProduct) {
        return (
          <li
            key={matchingProduct.id}
            className=" first:mt-20 flex flex-wrap w-11/12 border-2 shadow-md px-10 py-3 mb-10 rounded-lg"
          >
            <img className="w-32 h-28 bg-cover ml-16" src={matchingProduct.image} />
            <div className="grid grid-rows-1 grid-cols-7 w-10/12 ">
              <h2 className=" col-start-1 row-start-1 col-span-2  flex items-center text-left pl-5">
                {matchingProduct.title}
              </h2>
              <div className="col-start-4 row-start-1 mt-10 flex justify-center items-center col-span-1 border-2 border-gray-200 h-10 w-28 rounded-3xl">
                <button
                  className="bg-orange-300 px-2 row-start-1 rounded-full font-mono font-semibold text-center hover:bg-orange-400 mx-5"
                  onClick={() => dispatch(AddToCart(matchingProduct.id))}
                >
                  +
                </button>
                <p className="row-start-1 text-center">{item.qty}</p>
                <button
                  className="bg-gray-300 px-2 row-start-1  rounded-full font-mono font-semibold text-center mx-5 hover:bg-gray-400"
                  onClick={() => dispatch(removeFromCart(matchingProduct.id))}
                >
                  -
                </button>
              </div>
              <p className="font-semibold col-start-3 row-start-1 flex justify-center items-center">
                €{matchingProduct.price}
              </p>
              <p className="font-bold text-xl col-start-5 row-start-1 flex justify-center items-center">
              €{matchingProduct.price*item.qty}
              </p>
              <button
                onClick={() => dispatch(deleteFromCart(matchingProduct.id))}
                className="col-start-7 row-start-1  py-4 text-3xl cursor-pointer hover:text-red-600"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        );
      }
    });
  };

  return (
    <>
      <div className="h-screan w-full flex justify-center items-center flex-wrap">
        <ul className="flex justify-center flex-wrap">
          {cartItem.length > 0 ? displayCartItems() : <EmptyCartPage />}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
