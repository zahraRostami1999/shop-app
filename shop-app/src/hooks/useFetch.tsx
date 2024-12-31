import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

interface Result {
  data: Product[] | null;
  loading: boolean;
}

const useFetch = (): Result => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return { data, loading };
};

export default useFetch;
