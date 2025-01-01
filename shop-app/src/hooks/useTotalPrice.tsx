import React,{useMemo} from "react";

interface CartItem {
  qty: number;
  price: number;
}

export const useTotalPrice = (cartItems: CartItem[]): number => {
    let total = 0;
    const totalPrice = useMemo(()=>{
        cartItems.forEach((item) => {
            total += item.qty * item.price;
        });
        return total;
    },[])
    return totalPrice
};
