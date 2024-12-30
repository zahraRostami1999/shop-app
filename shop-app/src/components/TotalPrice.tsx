import React from "react";

interface CartItem {
  id: number;
  qty: number;
  price: number;
}

const TotalPrice: React.FC = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") as string);
  let total = 0;
  cartItems.map((item: CartItem) => {
    total += item.qty * item.price;
  });
  return (
    <p>
      Your total Price is <span className="text-green-700">€{total}</span>
    </p>
  );
};

export default TotalPrice;
