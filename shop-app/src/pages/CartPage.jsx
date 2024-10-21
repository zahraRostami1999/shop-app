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

  

  return (
    <>
      <h1>This is Cart Page</h1>
      {/* <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="border p-4 mb-2 rounded-lg shadow">
              <img src={item.image} alt={item.title} className="w-20 h-20" />
              <h2 className="font-bold">{item.title}</h2>
              <p>Price: {item.price}$</p>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div> */}
    </>
  );
}

export default CartPage;
