import { useEffect, useState, useMemo } from "react";
import Card from "../card/Card";
import { getProducts } from "../../services/api";
import React from "react";

function Products() {
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState("All");
  const filterBtn = ["All", "Adidas", "Nike", "Puma", "Reebok"];

  useEffect(() => {
    getProducts()
      .then((result) => setProductData(result))
      .catch((error) => console.log(error));
  }, []);

  const handleFilterProducts = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProducts = useMemo(() => {
    if (filter === "All") return productData;
    return productData.filter((product) => product.brand === filter);
  }, [productData, filter]);

  return (
    <>
      <div className="mt-24 flex flex-wrap justify-center gap-2 px-4 lg:px-24 md:px-12 sm:px-6 text-xs lg:text-lg md:text-lg font-Poppins font-medium">
        {filterBtn.map((btn) => {
          return <button className="border-2 border-orange-400 px-2 py-2 rounded-md hover:bg-orange-400 transition-all duration-300" key={btn} onClick={() => handleFilterProducts(btn)}>{btn}</button>
        })}
      </div>
      <div className="min-h-screen mt-5 lg:p-10 md:p-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default Products;
