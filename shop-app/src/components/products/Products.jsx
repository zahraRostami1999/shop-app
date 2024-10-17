import { useEffect } from "react";
import Card from "../card/Card";
import axios from "axios";

function Products() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/ProductAPI")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
