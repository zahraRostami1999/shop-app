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
      <div className=" shadow-gray-400 shadow-2xl border mx-7 rounded-lg mb-32 mt-10   bg-gradient-to-tr from-zinc-300 to-stone-100 ">
        <img className="w-full h-80 rounded-b-lg " src={image} />
        <div className="px-3 py-5">
          <h2 className=" h-20 text-left text-base font-sans pt-3 font-bold">
            {title}
          </h2>
          <p className="font-bold flex justify-between items-center">
            <span>€{price}</span>
            <span
              onClick={() => handleAddToBasket(id)}
              className="bg-red-500 p-2 rounded-md cursor-pointer"
            >
              Add to Basket
            </span>
          </p>
          <Link to={`/Product/${id}`}>
            <button className="bg-orange-300 w-full my-2 rounded-md py-2 font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
