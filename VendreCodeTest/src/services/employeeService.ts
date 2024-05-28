import type { IEmployee } from "@/models/IEmployee";
import type { IEmployeeResponse } from "../models/IEmployeeResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://reqres.in/api/users";

export const getEmployees = async (): Promise<IEmployee[]> => {
  const response = await get<IEmployeeResponse>(BASE_URL);
  return response.data;
};
