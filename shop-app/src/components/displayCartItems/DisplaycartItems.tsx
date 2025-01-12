import React from "react";
import { useSelector} from "react-redux";
import { RootState } from "../../redux/Store";
import { useGettingProducts } from "../../services/Query";
import CartItem from "../cartItem/CartItem";

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
         <div className="lg:w-11/12 md:w-11/12 sm:w-full w-full flex justify-center flex-wrap ">
            <ul className="lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 flex justify-between border-b-2 border-neutral-300 py-2 text-neutral-800 font-medium px-5">
               <li className="w-2/5 block">Product</li>
               <li className="w-1/6 block lg:text-center md:text-left sm:text-right text-right">Price</li>
               <li className="w-1/6 lg:block md:block sm:hidden hidden lg:text-center">Quantity</li>
               <li className="w-1/6 lg:block md:block sm:hidden hidden lg:text-center">Total</li>
            </ul>
            <div className="w-11/12">
               {displayItems()}
            </div>
         </div>
      </>
   );
};

export default DisplaycartItems;
