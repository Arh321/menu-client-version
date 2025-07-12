import { ICompany } from "@/types/company-type";
import { createSlice } from "@reduxjs/toolkit";
export interface ICompanyState {
  company: ICompany | null;
  companyLogo: string | null;
  companyVat: string | null;
}

const initialState: ICompanyState = {
  company: null,
  companyLogo: null,
  companyVat: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setCompanyLogo: (state, action) => {
      state.companyLogo = action.payload;
    },
    setCompanyVat: (state, action) => {
      state.companyVat = action.payload;
    },
  },
});

export default companySlice.reducer;

export const { setCompany, setCompanyLogo, setCompanyVat } =
  companySlice.actions;
