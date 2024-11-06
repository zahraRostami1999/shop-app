import { useEffect, useState, useMemo } from "react";
import Card from "../card/Card";
import { getProducts } from "../../services/api";

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

  return (
    <>
      <div className="mt-24 flex justify-around px-96 text-lg font-Poppins font-medium">
        <button onClick={() => handleFilterProducts("All")} className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400">All</button>
        <button onClick={() => handleFilterProducts("Adidas")} className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400">Adidas</button>
        <button onClick={() => handleFilterProducts("Nike")} className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400">Nike</button>
        <button onClick={() => handleFilterProducts("Puma")} className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400">Puma</button>
        <button onClick={() => handleFilterProducts("Reebok")} className="border-2 border-orange-400 w-24 h-10 rounded-md hover:bg-orange-400">Reebok</button>
      </div>
      <div className="mt-5 p-10 grid grid-cols-4 ">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default Products;