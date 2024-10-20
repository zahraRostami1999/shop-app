import { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";


function Products() {


  const [productData, setProductData] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/ProductAPI")
      .then((result) => {
        setProductData((productData) => productData=result.data); 

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
