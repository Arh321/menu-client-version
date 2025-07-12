import { IHttpResult } from "@/types/http-result";
import { apiClient } from "./apiConfig";
import { ICompany } from "@/types/company-type";

// export const getCompanies = async () => {
//   const response = await axios.get(
//     "https://dashboardapi.loyaltyhub.ir/digital-menu/Company/list/"
//   );
// };

export const getCompanies = async (): Promise<IHttpResult<ICompany[]>> => {
  const response = await apiClient.get("/Company/list/");
  return response.data;
};
