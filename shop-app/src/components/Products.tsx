import React, { useEffect, useState, useMemo } from "react";
import Card from "./Card";
import { getProducts } from "../services/api";
import BackTop from "./BackTop";
import Spinner from "./Spinner";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const Products: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const filterBtn = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProductData(result);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFilterProducts = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredProducts = useMemo(() => {
    if (filter === "all") return productData;
    return productData.filter((product) => product.category === filter);
  }, [productData, filter]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="min-h-screen">
          <div className="lg:mt-20 md:mt-20 mt-16 flex flex-wrap border-b justify-start px-2 lg:px-16 md:px-12 sm:px-5 text-xs lg:text-base md:text-base font-Poppins font-medium">
            {filterBtn.map((btn) => {
              return (
                <button
                  className="px-2 lg:px-5 md:px-3 py-2  hover:text-neutral-600 hover:border-b hover:border-neutral-900 transition-all duration-300"
                  key={btn}
                  onClick={() => handleFilterProducts(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div className="w-5/6 lg:w-11/12 md:w-5/6 sm:w-11/12 mx-auto mb-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-3">
            {filteredProducts.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
          <div className="">
            <BackTop />
          </div>
        </div>
      )}
    </>
  );
};
export default Products;
