import generateQuery from "@/utils/queryCreator";
import { apiClient } from "./apiConfig";

export const getMenus = async (payload: { branch_id?: number }) => {
  const query = generateQuery(payload);
  const response = await apiClient.get(`/api/menu/?${query}`);
  return response.data;
};
