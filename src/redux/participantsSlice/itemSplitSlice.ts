import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Participant } from "./participantsSlice";
import { IBasketState } from "@/types/menu/menu-types";

export interface ISharedBetween extends Participant {
  quantity: number;
}

export interface SharedItem {
  productId: number;
  sharedBetween: ISharedBetween[]; // participant IDs
}

export interface ItemSplitState {
  sharedItems: SharedItem[];
  errorMessage: string | undefined;
  products: IBasketState[];
}

const initialState: ItemSplitState = {
  products: [],
  sharedItems: [],
  errorMessage: undefined,
};

const itemSplitSlice = createSlice({
  name: "itemSplit",
  initialState,
  reducers: {
    assignParticipantToItem: (
      state,
      action: PayloadAction<{
        product: IBasketState;
        participant: Participant;
      }>
    ) => {
      const { product, participant } = action.payload;

      const item = state.sharedItems.find(
        (i) => i.productId === product.productId
      );

      if (!item) {
        // زمانی که "همه" انتخاب شده و quantity محصول برابر ۱ است
        if (participant.id === "1000") {
          state.errorMessage =
            "هنگام انتخاب همه، نمی‌توانید شخص جدیدی اضافه کنید.";
        }
        state.sharedItems.push({
          productId: product.productId,
          sharedBetween: [{ ...participant, quantity: 1 }],
        });
      } else {
        const findPerson = item.sharedBetween.find(
          (shared) => shared.id === participant.id
        );

        const findProduct = item.sharedBetween.find(
          (shared) => shared.id === "1000"
        );

        if ((findPerson && findPerson.id === "1000") || findProduct) {
          state.errorMessage =
            "محدودیت: دیگر نمی‌توانید شخص جدیدی اضافه کنید چون همه در محصول شریک هستند.";
          return;
        }

        // اگر "همه" انتخاب شده و کسی غیر از "همه" در لیست باشد، او را حذف کنیم
        if (participant.id === "1000") {
          const filter = state.sharedItems.filter(
            (item) => item.productId !== product.productId
          );
          console.log([
            ...filter,
            {
              productId: product.productId,
              sharedBetween: [
                {
                  ...participant,
                  quantity: product.quantity,
                },
              ],
            },
          ]);
          state.sharedItems = [
            ...filter,
            {
              productId: product.productId,
              sharedBetween: [
                {
                  ...participant,
                  quantity: product.quantity,
                },
              ],
            },
          ];
          state.errorMessage =
            "هنگام انتخاب همه، نمی‌توانید شخص جدیدی اضافه کنید.";
          return;
        }
        // اگر فرد مورد نظر موجود باشد، تعدادش افزایش پیدا کند
        if (findPerson) {
          findPerson.quantity++;
        }

        // اگر فرد مورد نظر پیدا نشد، او را اضافه کنیم
        if (!findPerson) {
          item.sharedBetween.push({
            ...participant,
            quantity: 1,
          });
        }
      }
    },
    removeParticipantFromItem: (
      state,
      action: PayloadAction<{
        product: IBasketState;
        participant: Participant;
      }>
    ) => {
      const { product, participant } = action.payload;

      const item = state.sharedItems.find(
        (i) => i.productId === product.productId
      );

      if (item) {
        const person = item.sharedBetween.find((p) => p.id === participant.id);

        if (person) {
          if (person.quantity > 1) {
            person.quantity--;
          } else {
            item.sharedBetween = item.sharedBetween.filter(
              (p) => p.id !== participant.id
            );
          }

          // اگه هیچکس دیگه شریک نبود → پاکش کن از لیست
          if (item.sharedBetween.length === 0) {
            state.sharedItems = state.sharedItems.filter(
              (i) => i.productId !== product.productId
            );
          }
        }
      }
    },
    setParticipantItemQuantity: (
      state,
      action: PayloadAction<{
        product: IBasketState;
        participant: Participant;
        quantity: number;
      }>
    ) => {
      const { product, participant, quantity } = action.payload;

      const item = state.sharedItems.find(
        (i) => i.productId === product.productId
      );

      if (!item) {
        if (quantity > 0) {
          state.sharedItems.push({
            productId: product.productId,
            sharedBetween: [{ ...participant, quantity }],
          });
        }
        return;
      }

      const person = item.sharedBetween.find((p) => p.id === participant.id);

      if (!person && quantity > 0) {
        item.sharedBetween.push({ ...participant, quantity });
      }

      if (person) {
        if (quantity <= 0) {
          item.sharedBetween = item.sharedBetween.filter(
            (p) => p.id !== participant.id
          );
        } else {
          person.quantity = quantity;
        }
      }

      if (item.sharedBetween.length === 0) {
        state.sharedItems = state.sharedItems.filter(
          (i) => i.productId !== product.productId
        );
      }
    },
    resetItemSplit: (state) => {
      state.sharedItems = [];
    },
    resetMessege: (state) => {
      state.errorMessage = undefined;
    },
    initShareProducts: (state, payload: PayloadAction<IBasketState[]>) => {
      state.products = payload.payload;
    },
  },
});

export const {
  assignParticipantToItem,
  removeParticipantFromItem,
  resetItemSplit,
  setParticipantItemQuantity,
  resetMessege,
  initShareProducts,
} = itemSplitSlice.actions;

export default itemSplitSlice.reducer;
