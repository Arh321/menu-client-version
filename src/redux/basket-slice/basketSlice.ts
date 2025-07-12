import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketState } from "@/types/menu/menu-types";

interface IBasketSlice {
  basket: IBasketState[];
}

const initialState: IBasketSlice = {
  basket: [],
};

const updateLocalStorage = (basket: IBasketState[]) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    initBasket: (state, action: PayloadAction<IBasketState[]>) => {
      state.basket = action.payload;
      updateLocalStorage(state.basket);
    },
    addToBasket: (state, action: PayloadAction<IBasketState>) => {
      state.basket.push(action.payload);
      updateLocalStorage(state.basket);
    },
    removeFromBasket: (state, action: PayloadAction<IBasketState>) => {
      state.basket = state.basket.filter(
        (product) => product.productId !== action.payload.productId
      );
      updateLocalStorage(state.basket);
    },
    clearBasket: (state) => {
      state.basket = [];
      updateLocalStorage(state.basket);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.basket.find(
        (product) => product.productId === action.payload.id
      );
      if (product) {
        product.quantity += 1;
        updateLocalStorage(state.basket);
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.basket.find(
        (product) => product.productId === action.payload.id
      );
      if (product) {
        product.quantity -= 1;
        if (product?.quantity === 0) {
          state.basket = state.basket.filter(
            (item) => item.productId !== product.productId
          );
        }
        updateLocalStorage(state.basket);
      }
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
  incrementQuantity,
  decrementQuantity,
  initBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
