import type { IEmployee } from "./IEmployee";

export interface IEmployeeResponse {
  data: IEmployee[];
  totalPages: number;
}
