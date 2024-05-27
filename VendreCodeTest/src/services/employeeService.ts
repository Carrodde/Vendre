import { get } from "./serviceBase";

const BASE_URL = "https://reqres.in/api/users";

export const getProducts = async (): Promise<I[]> => {
  return await get<IProduct[]>(BASE_URL);
};
