import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice/cartSlice';
import productsSlice from './features/productsSlice/productsSlice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
