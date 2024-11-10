import { useEffect, useState, useMemo } from "react";
import Card from "../card/Card";
import { getProducts } from "../../services/api";
import React from "react";

function Products() {
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState("All"); // Use a state variable for the filter

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

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight-50, behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-24 flex justify-around px-96 text-lg font-Poppins font-medium ">
        <button
          onClick={() => handleFilterProducts("All")}
          className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400 transition-all duration-300"
        >
          All
        </button>
        <button
          onClick={() => handleFilterProducts("Adidas")}
          className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400 transition-all duration-300"
        >
          Adidas
        </button>
        <button
          onClick={() => handleFilterProducts("Nike")}
          className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400 transition-all duration-300"
        >
          Nike
        </button>
        <button
          onClick={() => handleFilterProducts("Puma")}
          className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400 transition-all duration-300"
        >
          Puma
        </button>
        <button
          onClick={() => handleFilterProducts("Reebok")}
          className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400 transition-all duration-300"
        >
          Reebok
        </button>
      </div>
      <div className="mt-5 p-10 grid grid-cols-4 ">
        <div className="fixed bottom-2 right-2 w-10">
          <button
            onClick={scrollUp}
            className="text-zinc-700  text-center border-zinc-500 px-3 py-2  rounded-full shadow-xl shadow-zinc-900 hover:scale-95 transition duration-300 text-xl hover:text-zinc-800"
          >
            ▲
          </button>
          <button
            onClick={scrollDown}
            className="text-zinc-700  text-center border-zinc-500 px-3 py-2  rounded-full shadow-xl shadow-zinc-900 hover:scale-95 hover:text-zinc-800 transition duration-300 text-xl"
          >
            ▼
          </button>
        </div>
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default Products;
