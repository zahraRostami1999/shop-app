import Products from "../components/products/Products";
import FilterBrands from "../components/filterBrands/FilterBrands";

function ProductsListPage() {
  return (
    <>
      <div className="mt-20 w-full flex justify-center">
        <FilterBrands />
      </div>
      <Products />
    </>
  );
}

export default ProductsListPage;
