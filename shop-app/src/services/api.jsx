import axios from "axios";

const domain = "zahrarostami.away.pk";

const client = axios.create({
  baseURL: `http://${domain}:4500`,
});

export async function getProducts() {
  const { data } = await client("/Products");
  return data;
}

export async function getProductDetails(id) {
  const { data } = await client(`/Products/${id}`);
  return data;
}