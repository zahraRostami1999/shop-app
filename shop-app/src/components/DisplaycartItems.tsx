import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, removeFromCart, deleteFromCart } from "../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../redux/Store";
import { useGetProducts } from "../services/Query";
import { useHandleDelete } from "../hooks/useHandleDelete";
import { useHandleRemove } from "../hooks/useHandleRemove";
import OrangeBtn from "./Btn/OrangeBtn";
import GrayBtn from "./Btn/GrayBtn";

interface CartItem {
  id: string | number;
  qty: number;
}

const DisplaycartItems: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetProducts();
  const handleAdd = (id: string, price: number) => {
    dispatch(AddToCart({ id, price }));
  };
  const handleDelete = useHandleDelete();
  const handleRemove = useHandleRemove();

  return cartItems.map((item: CartItem) => {
    const matchingProduct = data.data?.find(
      (product) => item.id == parseInt(product.id)
    );
    if (matchingProduct) {
      return (
        <li key={matchingProduct.id} className="first:mt-20 flex flex-wrap justify-center items-center w-full border-2 shadow-lg lg:px-10 md:px-8 px-2 py-3 lg:mb-10 md:mb-8 mb-5 rounded-lg">
          <div className="flex items-start w-11/12">
            <img className="w-24 h-32 object-fill lg:ml-16 md:ml-10 ml-3" src={matchingProduct.image} alt={matchingProduct.title}/>
            <h2 className="col-span-2 flex items-center text-left text-sm md:text-base lg:text-lg pl-5 font-semibold">
              {matchingProduct.title}
            </h2>
          </div>
          <div className="grid grid-cols-5 lg:grid-cols-5 gap-4 w-full lg:w-10/12 md:w-11/12 mt-4 lg:mt-0">
            <p className="font-semibold flex justify-center items-center text-green-700 text-sm md:text-base lg:text-lg">€{matchingProduct.price}</p>
            <div className="col-span-1 flex justify-center items-center h-10 rounded-3xl ">
                <div className="w-1/6" onClick={() => handleAdd(matchingProduct.id, matchingProduct.price)}><OrangeBtn><h1>+</h1></OrangeBtn></div>
                <div className="w-1/6 flex justify-center"><p className="text-sm font-semibold  text-left">{item.qty}</p></div>
                <div className="w-1/6" onClick={() => handleRemove(matchingProduct.id, item.qty, matchingProduct.title)}><GrayBtn><h1>-</h1></GrayBtn></div>
            </div>
            <p className="font-bold text-center text-sm md:text-base lg:text-xl mt-2">€{matchingProduct.price * item.qty}</p>
            <button onClick={() => handleDelete(matchingProduct.id, matchingProduct.title)} className="flex justify-center items-center text-red-400 hover:text-red-600 text-xl md:text-2xl lg:text-3xl">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      );
    }
  });
};

export default DisplaycartItems;
