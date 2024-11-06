import Products from "../components/products/Products";

function ProductsListPage(){
  return (
    <>
    <div className="mt-20 w-full flex justify-center">
      <ul className="list-none flex w-1/2 py-5 text-xl font-Poppins font-medium justify-around">
        <li className="cursor-pointer">Adidas</li>
        <li className="cursor-pointer">Nike</li>
        <li className="cursor-pointer">Puma</li>
        <li className="cursor-pointer">Reebok</li>
      </ul>
    </div>
      <Products />
    </>
  );
};

export default ProductsListPage;
