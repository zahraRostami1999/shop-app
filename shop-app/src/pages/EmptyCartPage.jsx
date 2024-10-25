import { Link } from "react-router-dom";

function EmptyCartPage() {
  return (
    <>
      <div className=" w-full h-screen bg-zinc-100 flex justify-center items-center">
        <div className="bg-white w-2/5 h-5/6  top-28 left-96 rounded-md shadow-xl">
          <img
            src="https://i.pinimg.com/originals/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg"
            alt="Empty menu illustration"
            className="mx-auto mb-6 w-2/3 h-1/2 rounded-md"
          />
          <h1 className="text-zinc-800 text-center font-sans font-bold text-5xl">
            Your Cart is Empty!
          </h1>
          <h2 className="text-zinc-700 text-2xl text-center my-6 font-sans">
            Go find the product you like.
          </h2>
          <Link to="/">
            <button className="bg-red-500 text-zinc-900 text-xl text-center font-bold py-3 px-10 rounded-xl mx-40 my-10">
              Go Shopping :)
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCartPage;
