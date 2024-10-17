import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Card from "../card/Card";
import axios from "axios";
import {addProduct} from '../../redux/ProductSlice';

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/ProductAPI")
      .then((result) => {
        dispatch(addProduct(result.data)); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(products);

  return (
    <>
      <div className="bg-red-100 pt-20 p-10 grid grid-cols-9 gap-12">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Products;
