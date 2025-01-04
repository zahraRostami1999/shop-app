import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductDetails } from "./api";

export const useGettingProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
};

export const useProductDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => fetchProductDetails(id),
  });
};
