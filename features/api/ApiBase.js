import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBase = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.SERVER_BASE,
  }),
  endpoints: (builder) => ({}),
});
