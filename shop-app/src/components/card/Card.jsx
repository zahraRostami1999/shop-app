import { Link } from "react-router-dom";
function Card({ id, title, price, image }) {
  return (
    <>
<div
              
              className="bg-neutral-100 px-1 overflow-hidden shadow-gray-400 shadow-md border-zinc-200 border-2 lg:mx-5 mt-10 mx-3 rounded-2xl hover:border-zinc-300 hover:shadow-gray-900 hover:shadow-2xl transition duration-500 ease-in-out">
              <Link to={`/${id}`}>
                <div className="relative lg:w-44 lg:h-52 md:w-36 md:h-44 sm:w-40 sm:h-48 w-44 h-50 mx-auto">
                  <img
                    className="inset-0 h-full w-full rounded-t-2xl "
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="px-5 lg:px-3 md:px-3 break-words whitespace-normal ">
                  <h2 className="lg:h-16 flex flex-wrap md:h-16  text-zinc-800 text-sm lg:text-base md:text-base font-Poppins pt-3 font-bold">
                    {title}
                  </h2>
                  <p className="font-bold flex text-zinc-900 justify-between items-center pb-3 sm:pb-5 lg:pb-8 md:pb-7">
                    <span className="text-green-700">€{price}</span>
                  </p>
                </div>
              </Link>
            </div>
    </>
  );
}

export default Card;