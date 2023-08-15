import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice/cartSlice';
import productsSlice from './features/productsSlice/productsSlice';
import { api } from './api/apiSlice';
import userSlice from './features/userSlice/userSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    [api.reducerPath]: api.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
