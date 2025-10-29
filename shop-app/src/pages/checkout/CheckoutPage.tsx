import { useState } from "react";
import cover from "../../assets/covers/checkout.png";
import googlepay from "../../assets/icons/googlePay.png";
import { Input } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

function CheckoutPage() {
   const cartItems = useSelector((state: RootState) => state.cart.cartItems);
   const totalPrice = localStorage.getItem("totalPrice");
   const [imgLoaded, setImgLoaded] = useState(false);
   const [gimgLoaded, setGImgLoaded] = useState(false);
   const [pimgLoaded, setPImgLoaded] = useState(false);

   const calTotalPrice = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0) + 10;

   return (
      <>
         <div className="min-h-screen w-full h-full lg:px-10 md:px-8 font-Poppins text-zinc-800">
            <div className="flex flex-wrap lg:flex-nowrap w-full h-auto lg:h-2/3 lg:mt-10 mt-7">
               <div className="lg:w-1/2 w-full flex flex-col items-center p-4 lg:pt-20 pt-10">
                  <div className="text-left">
                     <h1 className="lg:text-3xl text-xl font-semibold">Thank you for shopping at Sportyfit store</h1>
                  </div>
                  <div className="mt-5 text-base lg:w-5/6 md:w-5/6 w-full bg-rose-400 px-5 pb-8 pt-3 rounded-lg shadow-lg shadow-zinc-400">
                     <div className="border-b-2 border-zinc-800 font-semibold pb-2">Order Summary:</div>
                     <div className="pt-5 space-y-2">
                        <div>Your order contains {cartItems.length} items</div>
                        <div>Shipping Cost is €10</div>
                        <div>Your total order amount is €{calTotalPrice}</div>
                     </div>
                  </div>
                  {!imgLoaded && <div className="w-full lg:w-5/6 md:w-5/6 mt-5 sm:[225px] md:h-[370px] lg:h-[400px]" />}
                  <img className="w-full lg:w-5/6 md:w-5/6 mt-5 object-cover rounded-lg" src={cover} alt="cover" onLoad={() => setImgLoaded(true)} style={{ display: imgLoaded ? "block" : "none" }} />
               </div>

               <div className="lg:w-1/2 w-full px-6 lg:px-24 mt-10 lg:mt-16">
                  <div>
                     <h3 className="lg:text-lg md:text-lg text-sm font-bold text-left lg:text-left">
                        To complete your order, we need to gather some shipping information. Please fill in the following details so we can send your high-quality products to you.
                     </h3>
                  </div>
                  <div className="mt-10 mb-20 space-y-4">
                     <Input label="Full Name:" />
                     <Input label="Email Address:" />
                     <Input label="Phone Number:" />
                     <Input label="Shipping Address:" />
                  </div>
                  <div>
                     <h4 className="font-semibold">Choose your payment method</h4>
                     <div className="flex lg:w-1/2 w-full justify-center lg:justify-between my-20 items-center gap-4">
                        <button className="flex items-center justify-center w-32 h-10 bg-neutral-300 rounded hover:bg-slate-300">
                           {!pimgLoaded && <div className="w-16" />}
                           <img
                              className="w-16"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                              alt="PayPal"
                              onLoad={() => setPImgLoaded(true)}
                              style={{ display: imgLoaded ? "block" : "none" }}
                           />
                        </button>
                        <button className="flex items-center justify-center w-32 h-10 bg-neutral-300 rounded hover:bg-slate-300">
                           {!gimgLoaded && <div className="w-16" />}
                           <img className="w-16" src={googlepay} alt="Google Pay" onLoad={() => setGImgLoaded(true)} style={{ display: imgLoaded ? "block" : "none" }} />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default CheckoutPage;
