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
  }, [getProducts]);

  const displayCartItems = () => {
    cartItem.map((item) => {
      productItems.map((product) => {
        if (item.id === product.id) {
          <div key={product.id}>
            <h2 className="mt-56">{product.id}</h2>
          </div>;
        } else {
          return <h2 className="mt-56">nothing</h2>;
        }
      });
    });
  };

  return (
    <>
      <h1 className="mt-20">This is Cart Page</h1>
      <div>
        {cartItem.length > 0 ? displayCartItems() : <h1>Cart is Empty</h1>}
      </div>
      <div className="bg-emerald-400 p-6 my-10 mx-20 rounded-md">
        <h1>Your Cart:</h1>
        <ul>
          <li className="my-5 p-3 border rounded">
            <div className="flex items-center mb-5">
              <img
                className="w-36 h-32 bg-cover "
                src="https://m.media-amazon.com/images/I/61ZJlxRC2ZL._AC_UY900_.jpg"
              />

              <div className="grid grid-cols-2 mx-10 px-3 grid-rows-4">
                <h2 className="row-start-1 font-bold">Product Name</h2>
                <input
                  className="row-start-4 w-12 h-8 rounded text-center bg-teal-100"
                  type="number" name="qty" min="1" max="20" 
                />
                <p className="row-start-3 font-semibold">Price: $100</p>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default CartPage;
