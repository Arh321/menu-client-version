import { getCompanies } from "@/services/companyService";

export const fetchCompanyInfo = async () => {
  try {
    const res = await getCompanies();
    const response = res?.result[0];
    if (!response) throw new Error("Failed to fetch company info");

    return response ?? null;
  } catch (error) {
    console.error("Error fetching companyInfo:", error);
    return null;
  }
};
