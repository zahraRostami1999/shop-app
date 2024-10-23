import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../services/api";

function CartPage() {
  const { cartItem } = useSelector((state) => state.cart);

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProductItems(result);
    });
  }, []);

  const displayCartItems = () => {
    return cartItem.map((item) => {
      const matchingProduct = productItems.find(
        (product) => item.id == product.id
      );
      if (matchingProduct) {
        return (
          <li
            key={matchingProduct.id}
            className=" rounded my-9 mx-6 flex items-center"
          >
            <img className="w-32 h-28 bg-cover " src={matchingProduct.image} />

            <div className="grid grid-cols-2 grid-rows-4 ml-6">
              <h2 className="row-start-1 font-bold">{matchingProduct.title}</h2>
              <input
                className="row-start-4 w-12 h-8 rounded text-center border"
                type="number"
                name="qty"
                min="1"
                max="20"
                value={item.qty}
              />
              <p className="row-start-3 font-semibold">
                Price: {matchingProduct.price} $
              </p>
            </div>
          </li>
        );
      } else {
        return (
          <h2 className="mt-56" key={item.id}>
            nothing
          </h2>
        );
      }
    });
  };

  return (
    <>
      <div></div>
      <div className=" border h-full shadow-lg mt-28 mb-10 mx-6 rounded-md">
        <ul>
          {cartItem.length > 0 ? (
            displayCartItems()
          ) : (
            <h1 className="text-center py-6 ">Cart is Empty</h1>
          )}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
