import axios from "axios";

const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getProducts() {
  const { data } = await client("/products");
  return data;
}

export async function getProductDetails(id) {
  const { data } = await client(`/products/${id}`);
  return data;
}

export const verifyUser = async (info) => {
  try {
    const { data } = await client('/users')
    const ckeckUser = data.find(user => user.username === info.username && user.password === info.password);
    return ckeckUser;
  } catch {
    console.error('Error verifying user:', error);
    return false;
  }
};