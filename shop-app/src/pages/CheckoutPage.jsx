import cover from "../assets/images/checkout.png";
import PayPal from "../assets/images/PayPal.png";
import googlepay from "../assets/images/googlePay.png";
import creditCard from "../assets/images/creditCard.png";

function CheckoutPage() {
  return (
    <>
      <div className=" w-full h-screen px-10 font-Poppins">
        <div className=" h-1/4 pt-20 w-1/2">
          <div className="text-3xl font-semibold">
            <h1>Thank you for shopping at Sportyfit store</h1>
          </div>
          <div className="flex justify-between mt-10">
            <div>Your order contains X items.</div>
            <div>Shipping Cost is Y.</div>
            <div>Your total order amount is Z.</div>
          </div>
        </div>
        <div className="flex w-full h-2/3 mt-5">
          <div className=" w-1/2">
            <img src={cover} alt="cover" />
          </div>
          <div className=" w-1/2 px-24 ">
            <div>

              <h3 className="text-lg font-bold">
                To complete your order, we need to gather some shipping
                information. Please fill in the following details so we can send
                your high-quality products to you.
              </h3>
            </div>
            <div className="my-10">
                <div className="my-5 w-full  flex justify-between items-center pr-5">
                    <label className="w-1/4">Full Name: </label>
                    <input className="w-2/3 h-8 rounded-lg border border-zinc-500" type="text" />
                </div>
                <div className="my-5 w-full  flex justify-between items-center pr-5">
                    <label className="w-1/3 ">Email Address: </label>
                    <input className="w-2/3 h-8 rounded-lg border border-zinc-500" type="text" />
                </div>
                <div className="my-5 w-full  flex justify-between items-center pr-5">
                    <label className="w-1/3 ">Phone Number: </label>
                    <input className="w-2/3 h-8 rounded-lg border border-zinc-500" type="text" />
                </div>
                <div className="my-5 w-full  flex justify-between items-center pr-5">
                    <label className="w-1/3 ">Shipping Address: </label>
                    <input className="w-2/3 h-8 rounded-lg border border-zinc-500" type="text" />
                </div>
            </div>
            <div>
              <h4>Choose your payment method</h4>
              <div className="flex w-2/3 h-10 justify-around mt-5 items-center">
                <img className="w-1/6" src={PayPal} alt="" />
                <img className="w-16 h-7" src={googlepay} alt="" />
                <img className="w-10" src={creditCard} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
