import axios from "axios";

interface UserInfo {
   username: string;
   password: string;
}

interface Product {
   id: string ;
   title: string;
   price: number;
   image: string;
   category: string;
}

const client = axios.create({
   baseURL: "https://fakestoreapi.com",
});

export async function fetchProducts(): Promise<Product[] | undefined> {
   const data = await client("/products");
   if (data) {
    return data.data;
 }
}

export async function fetchProductDetails(id: string | undefined): Promise<any> {
   const data = await client(`/products/${id}`);
   if (data) {
      return data.data;
   }
}

export async function fetchUsers(): Promise<UserInfo[]> {
   const data = await client("/users");
   return data.data;
}

export const verifyUser = async (info: UserInfo): Promise<any> => {
   try {
      const users = await fetchUsers();
      const ckeckUser = users.find((user: any) => user.username === info.username && user.password === info.password);
      return ckeckUser;
   } catch (error) {
      console.error("Error verifying user:", error);
      return false;
   }
};
