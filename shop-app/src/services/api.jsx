import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProducts() {
  const { data } = await client("/Products");
  return data;
}

export async function getProductDetails(id) {
  const { data } = await client(`/Products/${id}`);
  
  return data;
}
