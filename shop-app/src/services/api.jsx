import axios from "axios";

const domain = "api.zahra-rostami.ir";

const client = axios.create({
  baseURL: `https://${domain}`,
});

export async function getProducts() {
  const { data } = await client("/Products");
  return data;
}

export async function getProductDetails(id) {
  const { data } = await client(`/Products/${id}`);
  return data;
}