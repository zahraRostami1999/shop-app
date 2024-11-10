import cover from "../assets/images/checkout.png";
import googlepay from "../assets/images/googlePay.png";
import Input from "../components/input/Input";

function CheckoutPage() {
  return (
    <>
      <div className=" w-full h-screen px-10 font-Poppins">
        <div className="flex w-full h-2/3 mt-5">
          <div className=" w-1/2">
            <div className="pt-20">
              <div className="text-3xl font-semibold">
                <h1>Thank you for shopping at Sportyfit store</h1>
              </div>
              <div className="flex justify-between mt-10">
                <div>Your order contains X items.</div>
                <div>Shipping Cost is Y.</div>
                <div>Your total order amount is Z.</div>
              </div>
            </div>
            <img src={cover} alt="cover" />
          </div>
          <div className=" w-1/2 px-24 mt-20">
            <div>
              <h3 className="text-lg font-bold">
                To complete your order, we need to gather some shipping
                information. Please fill in the following details so we can send
                your high-quality products to you.
              </h3>
            </div>
            <div className="my-10">
            <Input label="Full Name:"/>
            <Input label="Email Address:"/>
            <Input label="Phone Number:"/>
            <Input label="Shipping Address:"/>
            </div>
            <div>
              <h4>Choose your payment method</h4>
              <div className="flex w-2/3 h-10 justify-around mt-5 items-center">
                <button className="h-5 px-5 py-5 bg-slate-200 flex items-center rounded">
                  <img
                    className="w-16 h-5 "
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                    alt=""
                  />
                </button>
                <button className="h-5 px-5 py-5 bg-slate-200 flex items-center rounded">
                  <img className="w-16 h-5 " src={googlepay} alt="googlepay" />
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
