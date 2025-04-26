"useClient";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { jobsApiT } from "@/lib/types";

export const jobsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mustafocoder.pythonanywhere.com/api/",
  }),
  endpoints: (builder) => ({
    getJobsByName: builder.query<jobsApiT, string>({
      query: (name) => `jobs/${name}`,
    }),
  }),
});

export const { useGetJobsByNameQuery } = jobsApi;
