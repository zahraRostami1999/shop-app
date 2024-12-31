import { useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/CartSlice"; 

export const useHandleDelete = () => {
  const dispatch = useDispatch();

  return (id: string, title: string) => {
    const confirmDelete = window.confirm(
      `This is the last item. Are you sure you want to remove ${title} from the cart?`
    );
    if (confirmDelete) {
      dispatch(deleteFromCart(id));
    }
  };
};