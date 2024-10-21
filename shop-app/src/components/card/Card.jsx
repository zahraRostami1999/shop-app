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
      <div className="border-slate-100 shadow-lg border mx-7 rounded-lg mb-10 px-3 py-2">
        <img className="w-full h-60 " src={image} />
        <h2 className=" h-20 text-left text-sm font-sans pt-3 font-semibold">
          {title}
        </h2>
        <p className="font-bold flex justify-between items-center">
          <span>{price}$</span>
          <span
            onClick={() => handleAddToBasket(id)}
            className="bg-yellow-400 p-2 rounded-md cursor-pointer"
          >
            Add to Basket
          </span>
        </p>
        <Link to={`/Product/${id}`}>
          <button className="bg-red-500 w-full my-2 rounded-md py-2 font-bold">View Details</button>
        </Link>
      </div>
    </>
  );
}

export default Card;
