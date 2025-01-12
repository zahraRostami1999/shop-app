import React from "react";
import { useHandleDelete } from "../../hooks/useHandleDelete";
import { useHandleRemove } from "../../hooks/useHandleRemove";
import {Button} from "../index";
import { AddToCart} from "../../redux/CartSlice";
import { useDispatch } from "react-redux";

interface Item {
   id: string;
   title: string;
   image: string;
   price: number;
   qty: number;
}

const CartItem: React.FC<Item> = ({ id, title, image, price, qty }) => {
   const dispatch = useDispatch();
   const handleAdd = (id: string, price: number) => {
      dispatch(AddToCart({ id, price }));
   };
   const handleDelete = useHandleDelete();
   const handleRemove = useHandleRemove();
   return (
      <>
         <li className="w-full">
            <ul className="flex justify-between lg:flex-row md:flex-row sm:flex-row flex-wrap lg:items-center md:items-center  border-b-2 border-neutral-300 py-2 px-2 text-neutral-800 font-medium">
               <li className="lg:w-2/5 md:w-2/5 sm:w-full w-full">
                  <img className="w-24 h-32 object-fill" src={image} alt={title} />
                  <h2 className="flex items-center text-left text-sm md:text-base lg:text-base font-semibold">{title}</h2>
                  <p className="my-5 lg:text-sm md:text-sm sm:text-xs text-xs text-red-500 font-bold cursor-pointer hover:text-red-600" onClick={() => handleDelete(id, title)}>
                     Delete
                  </p>
               </li>
               <li className="lg:w-1/6 md:w-1/6 lg:text-center">
                  <p className=" text-green-700 lg:text-sm md:text-sm sm:text-xs text-xs">€{price}</p>
               </li>
               <li className="lg:w-1/6 md:w-1/6 flex justify-center h-7 lg:text-center">
                  <div className="border border-rose-900 lg:w-1/2 md:w-1/2 sm:w-2/3 w-3/5 flex justify-center">
                     <Button label="+" color="gold" size="xs" rounded={true} onClick={() => handleAdd(id, price)} />
                     <p className="w-10 lg:text-xs md:text-sm sm:text-xs text-xs flex justify-center items-center">{qty}</p>
                     <Button label="-" size="xs" color="gold" rounded={true} onClick={() => handleRemove(id, qty, title)} />
                  </div>
               </li>
               <li className="lg:w-1/6 md:w-1/6 lg:text-center">
                  <p className="font-bold lg:text-sm md:text-sm sm:text-xs text-xs text-green-700">€{price * qty}</p>
               </li>
            </ul>
         </li>
      </>
   );
};

export default CartItem;
