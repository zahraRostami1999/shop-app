import Card from "../card/Card";

function Products() {
  return (
    <>
      <div className="bg-red-100 pt-20 p-10 grid grid-cols-9 gap-12">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Products;
