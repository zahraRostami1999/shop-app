import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../services/api";
import { useDispatch } from "react-redux";
import { AddToCart, removeFromCart } from "../redux/CartSlice";
import EmptyCartPage from "./EmptyCartPage";

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
          <li key={matchingProduct.id} className="  w-2/3 flex first:mt-28 shadow-lg mb-10 mx-10 rounded-md border px-10 py-5">
            <img className="w-32 h-28 bg-cover" src={matchingProduct.image}/>
            <div className="grid grid-cols-2 grid-rows-2 ml-6">
              <h2 className="row-start-1 font-bold">{matchingProduct.title}</h2>
              <div className="row-start-4 flex my-2">
                <button
                  className="bg-green-300 px-2 rounded-full font-mono font-semibold text-center mx-2"
                  onClick={() => dispatch(AddToCart(matchingProduct.id))}
                >
                  +
                </button>
                <p>{item.qty}</p>
                <button
                  className="bg-red-300 px-2 rounded-full font-mono font-semibold text-center mx-2"
                  onClick={() => dispatch(removeFromCart(matchingProduct.id))}
                >
                  -
                </button>
              </div>
              <p className="row-start-3 font-semibold">
                Price: {matchingProduct.price} €
              </p>
            </div>
          </li>
        );
      }
      
    });
  };
  

  return (
    <>
      <div className="h-full  w-full flex justify-center flex-wrap">
        <ul className="  w-11/12 flex justify-center flex-wrap">{cartItem.length > 0 ? displayCartItems() : <EmptyCartPage />}</ul>
      </div>
    </>
  );
}

export default CartPage;
