import { useSelector } from "react-redux";
import ConfirmOrder from "../components/ConfirmOrder";
import DisplaycartItems from "../components/DisplaycartItems";
import EmptyCartPage from "./EmptyCartPage";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className=" min-h-screen w-full flex justify-center items-center flex-wrap">
        <ul className="flex justify-center flex-wrap">
          {cartItems.length > 0 ? < DisplaycartItems /> : <EmptyCartPage />}
          {cartItems.length > 0 ? <ConfirmOrder /> : console.log(cartItems.length)}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
