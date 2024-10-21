import { Link } from "react-router-dom";

function Card({ id,title, price, description, image }) {
  return (
    <>
      <div className="border-slate-100 shadow-lg border mx-7 rounded-lg mb-10 h-96 px-3">
        <img className="w-full h-60 py-4 " src={image} />
        <h2 className=" h-20 text-left text-sm font-sans pt-3 font-semibold">
          {title}
        </h2>
        <p className="font-bold flex justify-between items-center">
          <span>{price}$</span>

          <span className="bg-yellow-400 p-2 rounded-lg">
            <Link to='/cart'>Add to Basket</Link>
          </span>
        </p>
      </div>
    </>
  );
}

export default Card;
