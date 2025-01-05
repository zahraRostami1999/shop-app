import React from "react";
import { useHandleDelete } from "../hooks/useHandleDelete";
import { useHandleRemove } from "../hooks/useHandleRemove";
import Button from "./Btn/Button";
import { AddToCart, removeFromCart, deleteFromCart } from "../redux/CartSlice";
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
            <ul className=" flex justify-between border-b-2 border-neutral-300 py-2 px-2 text-neutral-800 font-medium">
               <li className="w-2/5">
                  <img className="w-24 h-32 object-fill" src={image} alt={title} />
                  <h2 className="flex items-center text-left text-sm md:text-base lg:text-base font-semibold">{title}</h2>
                  <p className="my-5" onClick={() => handleDelete(id, title)}>
                     Delete
                  </p>
               </li>
               <li className="w-1/6">
                  <p className=" text-green-700 text-sm md:text-base lg:text-base">€{price}</p>
               </li>
               <li className="w-1/6 flex h-7">
                  <Button label="+" size="xs" rounded={true} onClick={() => handleAdd(id, price)} />
                  <p className="w-10 text-sm font-semibold text-center">{qty}</p>
                  <Button label="-" size="xs" color="neutral" rounded={true} onClick={() => handleRemove(id, qty, title)} />
               </li>
               <li className="w-1/6">
                  <p className="font-bold text-sm md:text-base lg:text-base text-green-700">€{price * qty}</p>
               </li>
            </ul>
         </li>
      </>
   );
};

export default CartItem;
