import Card from "../card/Card";

function Products() {
  return (
    <>
      <div className="bg-cyan-100 mt-10 p-4 grid grid-cols-9 gap-12">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Products;
