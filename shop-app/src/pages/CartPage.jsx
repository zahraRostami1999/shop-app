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
            className="  w-2/3 flex first:mt-28 shadow-lg mb-10 mx-10 rounded-md border px-10 py-3 relative"
          >
            <img className="w-32 h-28 bg-cover" src={matchingProduct.image} />
            <div className="grid grid-cols-2 grid-rows-2 ml-6">
              <h2 className="row-start-1 font-bold">{matchingProduct.title}</h2>
              <div className="row-start-3 flex my-1">
                <button
                  className="bg-green-300 px-2 rounded-full font-mono font-semibold text-center hover:bg-green-400"
                  onClick={() => dispatch(AddToCart(matchingProduct.id))}
                >
                  +
                </button>
                <p className="ml-2">{item.qty}</p>
                <button
                  className="bg-red-300 px-2 rounded-full font-mono font-semibold text-center mx-2 hover:bg-red-400"
                  onClick={() => dispatch(removeFromCart(matchingProduct.id))}
                >
                  -
                </button>
              </div>
              <p className="row-start-2 font-semibold">
                Price: {matchingProduct.price} €
              </p>
              <button onClick={() => dispatch(deleteFromCart(matchingProduct.id))} className="absolute bottom-0 right-0 px-3 py-4 text-3xl cursor-pointer hover:text-red-600">
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
      <div className="h-full  w-full flex justify-center flex-wrap">
        <ul className="flex justify-center flex-wrap">
          {cartItem.length > 0 ? displayCartItems() : <EmptyCartPage />}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
