import { useSelector } from "react-redux";
import { EmptyCartPage } from "../index";
import { RootState } from "../../redux/Store";
import { ShoppingCart } from "../../components";
import { useState } from "react";

function CartPage() {
   const cartItems = useSelector((state: RootState) => state.cart.cartItems);
   const [imgLoaded, setImgLoaded] = useState(false);

   return (
      <>
         <div className="w-full flex justify-center items-center flex-wrap">
            <ul className="flex justify-center flex-wrap w-full">{cartItems.length > 0 ? <ShoppingCart /> : <EmptyCartPage />}</ul>
         </div>
      </>
   );
}

export default CartPage;
