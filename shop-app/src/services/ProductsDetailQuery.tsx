import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "./api";

export const ProductDetailsQuery = (id: string) =>
    useQuery({
      queryKey: ["productsDetails"],
      queryFn: () => getProductDetails(id),
    });
  