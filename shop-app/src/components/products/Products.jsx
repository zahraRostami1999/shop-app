import { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";
import { getProducts } from "../../services/api";
import { Link } from "react-router-dom";

function Products() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProductData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="mt-5 p-10 grid grid-cols-4 ">
        {productData.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default Products;
