import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductDetails } from "./api";
import axios from "axios";

interface UserInfo {
  username: string;
  password: string;
}

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
};

export const useProductDetails = (id: string) => {
  return useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });
};
