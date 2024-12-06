import axios from "axios";

const projectPhase = process.env.NODE_ENV;
const domain = (projectPhase == 'development') ? 'zahrarostami.away.pk' : window.location.hostname;

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
