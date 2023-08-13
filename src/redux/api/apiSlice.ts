import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://technet-server-omega-nine.vercel.app/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    singleProducts: builder.query({
      query: (id) => `product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useSingleProductsQuery } = api;
