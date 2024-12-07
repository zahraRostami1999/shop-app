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
      <Link to={`/Product/${id}`}>
        <div className=" shadow-gray-400 shadow-lg pb-5 border-zinc-300 border-2 lg:mx-7 md:mx-7 mx-2 rounded-2xl mb-40 mt-10 bg-gradient-to-tr from-zinc-300 to-stone-100 hover:border-zinc-300 hover:shadow-gray-900 hover:shadow-2xl transition duration-500 ease-in-out">
          <img className="w-full h-1/2 rounded-t-2xl" src={image} />
          <div className="px-1 lg:px-3 md:px-3">
            <h2 className=" h-20 text-left text-zinc-800 text-xs lg:text-base md:text-base font-Poppins pt-3 font-bold">
              {title}
            </h2>
            <p className="font-bold flex text-zinc-900 justify-between items-center">
              <span>€{price}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
