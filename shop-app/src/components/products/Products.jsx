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
      <div className="bg-red-100 pt-20 p-10 grid grid-cols-3 gap-12">
        {productData.map((product) => (
          <Link to={`/products/${1}`}>
            <Card key={product.id} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Products;
