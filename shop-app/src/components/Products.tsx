import React, { useState, useMemo } from "react";
import Card from "./Card";
import BackTop from "./BackTop";
import Spinner from "./Spinner";
import { useGettingProducts } from "../services/Query";
import ProductFitler from "./filter/ProductFilter";
import { PriceFilterList, CategoryFilterList, RatingFilterList } from "./filter/FilterList";

const Products: React.FC = () => {
   const { data: productData, isLoading: loading } = useGettingProducts();
   const [categoryFilter, setCategoryFilter] = useState<string>("all");
   const [priceFilter, setPriceFilter] = useState<string>("all");
   const [rateFilter, setRateFilter] = useState<string>("all");
   
   const handleCategoryFilterChange = (value: string) => {
      setCategoryFilter(value);
   };

   const handlePriceFilterChange = (value: string) => {
      setPriceFilter(value);
   };

   const handleRateFilterChange = (value: string) => {
      setRateFilter(value); 
   };

   const filteredProducts = useMemo(() => {
      let filter = productData;
      if (categoryFilter != "all") {
         filter = filter?.filter((item) => item.category === categoryFilter); 
      }
      if (priceFilter != "all") {
         if (priceFilter === "10") filter = filter?.filter((item) => item.price <= 10);
         if (priceFilter === "30") filter = filter?.filter((item) => item.price <= 30 && item.price >= 10);
         if (priceFilter === "100") filter = filter?.filter((item) => item.price <= 100 && item.price >= 30);
         if (priceFilter === "+100") filter = filter?.filter((item) => item.price >= 100);
      }
      if (rateFilter != "all") {
         filter = filter?.filter((item) => item.rating.rate >= parseInt(rateFilter) && item.rating.rate <= parseInt(rateFilter)+2)
      }
      return filter;
   }, [productData, categoryFilter, priceFilter, rateFilter]);

   return (
      <>
         {loading ? (
            <Spinner />
         ) : (
            <div className="min-h-screen">
               <div className="mt-20 font-Poppins font-medium w-full lg:px-7 md:px-7 px-0 flex lg:justify-start justify-center">
                  <ProductFitler options={CategoryFilterList} onSelectChange={handleCategoryFilterChange} />
                  <ProductFitler options={PriceFilterList} onSelectChange={handlePriceFilterChange} />
                  <ProductFitler options={RatingFilterList} onSelectChange={handleRateFilterChange} />
               </div>
               <div className="w-5/6 lg:w-11/12 md:w-5/6 sm:w-11/12 mx-auto mb-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-3">
                  {filteredProducts?.map((product) => (
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
