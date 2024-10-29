import { Link } from "react-router-dom";
import cover from '../assets/images/Empty.jpeg'

function EmptyCartPage() {
  return (
    <>
      <div className=" bg-gray-50 w-full mt-8 font-Poppins">

          <img
            src={cover}
            alt="Empty menu illustration"
            className="mx-auto mt-10 mb-6 w-3/5 h-1/2 rounded-md"
          />
          <h1 className="text-zinc-800 text-center font-bold text-5xl">
            Your Cart is Empty!
          </h1>
          <h2 className="text-zinc-700 text-2xl text-center my-2">
          Let's see the new collection.
          </h2>
          <Link className=" w-full flex justify-center" to="/Products">
            <button className="bg-orange-500 text-zinc-900 text-xl text-center font-bold py-3 px-10 rounded-xl mt-6">
              Go Shopping 
            </button>
          </Link>

      </div>
    </>
  );
}

export default EmptyCartPage;
