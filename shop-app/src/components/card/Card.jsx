import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/CartSlice";

function Card({ id, title, price, description, image }) {
  const dispatch = useDispatch();

  const handleAddToBasket = (id) => {
    dispatch(AddToCart(id));
  };

  return (
    <>
      <div className=" shadow-gray-400 shadow-lg pb-5 border-zinc-300 border-2 lg:mx-7 md:mx-7 mx-2 rounded-2xl mb-40 mt-10 bg-gradient-to-tr from-zinc-300 to-stone-100 hover:border-zinc-300 hover:shadow-gray-900 hover:shadow-2xl transition duration-500 ease-in-out">
        <img className="w-full h-1/2 rounded-t-2xl" src={image} />
        <div className="px-1 lg:px-3 md:px-3">
          <h2 className=" h-20 text-left text-zinc-800 text-xs lg:text-base md:text-base font-Poppins pt-3 font-bold">
            {title}
          </h2>
          <p className="font-bold flex text-zinc-900 justify-between items-center">
            <span>€{price}</span>
            <span
              onClick={() => handleAddToBasket(id)}
              className="text-xs lg:text-base bg-orange-500 border-2 border-orange-500 mt-5 p-1 mb-3 rounded-md cursor-pointer hover:scale-95  transition duration-300 ease-in-out"
            >
              Add to Basket
            </span>
          </p>
          <Link to={`/Product/${id}`}>
            <button className="text-xs lg:text-base bg-blue-950 w-full border-blue-950 border-2 my-2 rounded-md py-2 font-bold focus:scale-95 text-white transition duration-300 ease-in-out">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
