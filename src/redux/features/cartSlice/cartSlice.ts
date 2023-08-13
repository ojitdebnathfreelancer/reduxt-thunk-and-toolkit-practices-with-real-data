/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const exist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exist) {
        exist.quantity = exist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    removeToCart: (state, action: PayloadAction<IProduct>) => {
      const exist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (exist) {
        exist.quantity = exist.quantity! - 1;
      }
      if (exist?.quantity === 0) {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }

      state.total -= action.payload.price;
    },
    deleteToCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, deleteToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
