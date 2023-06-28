import { createApi } from "@reduxjs/toolkit/query/react";
import { ENV_VITE } from "../constant/apiKey/envImport";
import { URL_COUNTRY } from "../constant/apiKey/urlCountry";
import { URL_POPULAR } from "../constant/apiKey/urlPopular";
import { baseQuery } from "./baseQuery";
export const movieApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "movies",
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getList: builder.mutation({
      query: (page) => ({
        url: `${URL_POPULAR}${ENV_VITE}${URL_COUNTRY}&page=${page}`,
        method: "GET",
      }),
    }),
    getDetails: builder.query({
      query: (id) => ({
        url: `/movie/${id}?api_key=${ENV_VITE}${URL_COUNTRY}`,
        method: "GET",
      }),
    }),
    getDetailsWithType: builder.query({
      query: ({ id, type }) => ({
        url: `/movie/${id}/${type}?api_key=${ENV_VITE}`,
        method: "GET",
      }),
    }),
    getColections: builder.query({
      query: (id) => ({
        url: `/collection/${id}?api_key=${ENV_VITE}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetListMutation,
  useGetDetailsQuery,
  useGetDetailsWithTypeQuery,
  useGetColectionsQuery,
} = movieApi;
