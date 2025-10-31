import React, { useState, useMemo } from "react";
import { BackTop, Card, Spinner } from "../index"; 
import { ProductFilter } from "../filter/ProductFilter";
import { useGettingProducts } from "../../services/Query";
import { PriceFilterList, CategoryFilterList, RatingFilterList } from "../../helpers/FilterList";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Products: React.FC = () => {
   const { data: productData, isLoading } = useGettingProducts();

   const [category, setCategory] = useState("all");
   const [price, setPrice] = useState("all");
   const [rating, setRating] = useState("all");
   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

   const filteredProducts = useMemo(() => {
      let list = productData ?? [];
      if (category !== "all") list = list.filter((p) => p.category === category);
      if (price !== "all") {
         if (price === "10") list = list.filter((p) => p.price <= 10);
         else if (price === "30") list = list.filter((p) => p.price > 10 && p.price <= 30);
         else if (price === "100") list = list.filter((p) => p.price > 30 && p.price <= 100);
         else if (price === "+100") list = list.filter((p) => p.price > 100);
      }
      if (rating !== "all") {
         const min = parseInt(rating);
         list = list.filter((p) => p.rating.rate >= min && p.rating.rate < min + 3);
      }
      return list;
   }, [productData, category, price, rating]);

   if (isLoading) return <Spinner />;

   return (
      <>
         <div className="min-h-screen">
            <div className="lg:hidden sticky top-30 z-30 bg-white border-b shadow-sm">
               <div className="p-3 flex items-center mt-20 justify-between">
                  <button onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="flex items-center gap-2 px-4 py-2 bg-cherry-600 text-cherry-800 rounded-md text-sm font-medium">
                     Filters
                     {mobileFiltersOpen ? <IoChevronUp className="h-6 w-4 pt-[1px] text-cherry-800 transition-transform" /> : <IoChevronDown className="h-6 w-4 pt-[4px] text-cherry-800 transition-transform" />}
                  </button>

                  {(category !== "all" || price !== "all" || rating !== "all") && (
                     <span className="bg-cherry-100 text-cherry-800 text-xs px-2 py-1 rounded-full">{[category, price, rating].filter((v) => v !== "all").length}</span>
                  )}
               </div>
            </div>

            {mobileFiltersOpen && (
               <div className="lg:hidden p-4 bg-white border-b space-y-4">
                  <ProductFilter title="Category" options={CategoryFilterList} selected={category} onSelect={setCategory} />
                  <ProductFilter title="Price" options={PriceFilterList} selected={price} onSelect={setPrice} />
                  <ProductFilter title="Rate" options={RatingFilterList} selected={rating} onSelect={setRating} />
               </div>
            )}

            <div className="flex">
               <aside className="hidden lg:block w-64 p-6 bg-white border-gray-200 sticky top-16 h-screen overflow-y-auto">
                  <h2 className="mb-6 text-lg font-semibold text-cherry-800">Filters</h2>
                  <ProductFilter title="Category" options={CategoryFilterList} selected={category} onSelect={setCategory} />
                  <ProductFilter title="Price" options={PriceFilterList} selected={price} onSelect={setPrice} />
                  <ProductFilter title="Rate" options={RatingFilterList} selected={rating} onSelect={setRating} />
               </aside>

               <section className="flex-1 p-4 sm:p-0 lg:p-2 overflow-y-auto rounded-xl lg:mx-5 lg:mt-20 lg:mb-5 sm:my-7 my-5 mx-10 sm:mx-3 bg-neutral-100">
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
                     {filteredProducts.map((p) => (
                        <Card key={p.id} {...p} />
                     ))}
                  </div>

                  {filteredProducts.length === 0 && <p className="text-center text-neutral-500 mt-12">No products were found with these filters.</p>}
               </section>
            </div>
         </div>

         <BackTop />
      </>
   );
};

export default Products;
