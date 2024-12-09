import axios from "axios";

const domain = "https://api.zahra-rostami.ir";

const client = axios.create({
  baseURL: `http://${domain}:4500`,
});

export async function getProducts() {
  const { data } = await client("/Products");
  // const { data } = await axios.get("https://api.zahra-rostami.ir/Products");
  return data;
}

export async function getProductDetails(id) {
  const { data } = await client(`/Products/${id}`);
  return data;
}