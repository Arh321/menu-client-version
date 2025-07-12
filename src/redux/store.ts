import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./company-slice/companySlice";
import basketReducer from "./basket-slice/basketSlice";
import participantsReducer from "./participantsSlice/participantsSlice";
import itemSplitSlice from "./participantsSlice/itemSplitSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
    basket: basketReducer,
    participants: participantsReducer,
    itemSplitSlice: itemSplitSlice,
  },
});

// ✅ Infer Types for Usage in Components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
