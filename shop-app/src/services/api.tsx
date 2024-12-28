import axios from "axios";

interface UserInfo {
  username: string;
  password: string;
}

const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getProducts(): Promise<any> {
  const { data } = await client("/products");
  return data;
}

export async function getProductDetails(id: string): Promise<any> {
  const { data } = await client(`/products/${id}`);
  return data;
}

export const verifyUser = async (info: UserInfo): Promise<any> => {
  try {
    const { data } = await client("/users");
    const ckeckUser = data.find(
      (user: any) =>
        user.username === info.username && user.password === info.password
    );
    return ckeckUser;
  } catch (error) {
    console.error("Error verifying user:", error);
    return false;
  }
};
