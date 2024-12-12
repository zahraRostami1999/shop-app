import { useEffect, useState, useMemo } from "react";
import Card from "../card/Card";
import { getProducts } from "../../services/api";
import React from "react";
import BackTop from '../BackTop.jsx'

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
      <div className="mt-20 flex flex-wrap justify-center gap-2 px-4 lg:px-24 md:px-12 sm:px-6 text-xs lg:text-base md:text-base font-Poppins font-medium">
        {filterBtn.map((btn) => {
          return <button className="border-2 border-orange-400 px-2 py-2 rounded-md hover:bg-orange-400 transition-all duration-300" key={btn} onClick={() => handleFilterProducts(btn)}>{btn}</button>
        })}
      </div>
      <div className="w-2/3 lg:w-11/12 md:w-5/6 sm:w-11/12 mx-auto min-h-screen mb-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      <div className="">
        <BackTop />
      </div>
    </>
  );
}
export default Products;
