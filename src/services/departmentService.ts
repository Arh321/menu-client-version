import generateQuery from "@/utils/queryCreator";
import { apiClient } from "./apiConfig";

export const getDepartments = async (payload: {
  branch_id?: number;
  branch_name?: string;
}) => {
  const query = generateQuery(payload);
  const response = await apiClient.get(`/branches/?${query}`);
  return response.data;
};
