import { useEffect, useState } from "react";
import Card from "../card/Card";
import { getProducts } from "../../services/api";

function Products() {
  const [productData, setProductData] = useState([]);
  const [fiteredData, setFiteredData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProductData(result);
        setFiteredData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="mt-5 p-10 grid grid-cols-4 ">
        {productData.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default Products;
