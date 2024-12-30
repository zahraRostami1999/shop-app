import React,{ useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../services/api";
import { AddToCart, removeFromCart, deleteFromCart } from "../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../redux/store";

interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

interface CartItem {
    id: number;
    qty: number;
}

const DisplaycartItems: React.FC = () => {
    const cartItems  = useSelector((state: RootState) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [productItems, setProductItems] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then((result) => {
            setProductItems(result);
        });
    }, []);

    const handleAdd = (id: string, price: number) => {
        dispatch(AddToCart({ id, price }));
    }

    const handleDelete = (id: string, title: string) => {
        const confirmDelete = window.confirm(
            `This is the last item. Are you sure you want to remove ${title} from the cart?`
        );
        if (confirmDelete) {
            dispatch(deleteFromCart(id));
        }
    };

    const handleRemove = (id: string, qty: number, title: string) => {
        if (qty === 1) {
            const confirmDelete = window.confirm(
                `This is the last item. Are you sure you want to remove ${title} from the cart?`
            );
            if (confirmDelete) {
                dispatch(deleteFromCart(id));
            }
        }
        else {
            dispatch(removeFromCart(id));
        }
    }
    return cartItems.map((item: CartItem) => {
        const matchingProduct = productItems.find(
            (product) => item.id == parseInt(product.id)
        );
        if (matchingProduct) {
            return (
                <li
                    key={matchingProduct.id}
                    className="first:mt-20 flex flex-wrap justify-center items-center lg:w-11/12 md:w-11/12 w-full border-2 shadow-lg lg:px-10 md:px-8 px-2 py-3 lg:mb-10 md:mb-8 mb-5 rounded-lg"
                >
                    <div className="flex items-start lg:w-full md:w-11/12 w-11/12">
                        <img
                            className="w-24 h-32 object-fill lg:ml-16 md:ml-10 ml-3"
                            src={matchingProduct.image}
                            alt={matchingProduct.title}
                        />
                        <h2 className="col-span-2 flex items-center text-left text-sm md:text-base lg:text-lg pl-5 font-semibold">
                            {matchingProduct.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-5 lg:grid-cols-5 gap-4 w-full lg:w-10/12 md:w-11/12 mt-4 lg:mt-0">
                        <p className="font-semibold flex justify-center items-center text-green-700 text-sm md:text-base lg:text-lg">
                            €{matchingProduct.price}
                        </p>
                        <div className="col-span-2 flex justify-center items-center h-10 rounded-3xl">
                            <button
                                className="bg-orange-400 px-3 py-1.5 rounded-full font-mono font-semibold text-sm hover:bg-orange-500 mx-2"
                                onClick={() => handleAdd(matchingProduct.id, matchingProduct.price)}>
                                +
                            </button>
                            <p className="text-sm font-semibold">{item.qty}</p>
                            <button
                                className="bg-gray-300 px-3 py-1.5 rounded-full font-mono font-semibold text-sm hover:bg-gray-400 mx-2"
                                onClick={() => handleRemove(matchingProduct.id, item.qty, matchingProduct.title)}>-</button>
                        </div>
                        <p className="font-bold text-center text-sm md:text-base lg:text-xl mt-2">
                            €{matchingProduct.price * item.qty}
                        </p>
                        <button onClick={() => handleDelete(matchingProduct.id, matchingProduct.title)}
                            className="flex justify-center items-center text-red-400 hover:text-red-600 text-xl md:text-2xl lg:text-3xl">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </li>
            );
        }
    });
};

export default DisplaycartItems;