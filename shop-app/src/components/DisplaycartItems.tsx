import React from "react";
import { useSelector} from "react-redux";
import { RootState } from "../redux/Store";
import { useGettingProducts } from "../services/Query";
import CartItem from "./CartItem";

interface CartItem {
   id: string | number;
   qty: number;
}

const DisplaycartItems: React.FC = () => {
   const cartItems = useSelector((state: RootState) => state.cart.cartItems);
   const { data: products, isLoading: loading } = useGettingProducts();

   const displayItems = () => {
      return cartItems.map((item: CartItem) => {
         const matchingProduct = products?.find((product) => item.id == parseInt(product.id));
         if (matchingProduct) {
            return (
               <>
                  <CartItem id={matchingProduct.id} title={matchingProduct.title} image={matchingProduct.image} price={matchingProduct.price} qty={item.qty} />
               </>
            );
         }
         return null;
      });
   };

   return (
      <>
         <div className="w-11/12 flex justify-center flex-wrap">
            <ul className="w-11/12 flex justify-between border-b-2 border-neutral-300 py-2 px-2 text-neutral-800 font-medium">
               <li className="w-2/5">Product</li>
               <li className="w-1/6">Price</li>
               <li className="w-1/6">Quantity</li>
               <li className="w-1/6">Total</li>
            </ul>
            <div className="w-11/12">
               {displayItems()}
            </div>
         </div>
      </>
   );
};

export default DisplaycartItems;
