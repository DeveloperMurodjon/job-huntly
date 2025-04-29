"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { jobsApiT } from "@/lib/types";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mustafocoder.pythonanywhere.com/api/",
  }),
  tagTypes: ["Jobs"],
  endpoints: (builder) => ({
    getJobs: builder.query<jobsApiT[], void>({
      query: () => "jobs/",
      providesTags: ["Jobs"],
    }),
    getJobById: builder.query<jobsApiT, string>({
      query: (id) => `jobs/${id}/`,
      providesTags: (result, error, id) => [{ type: "Jobs", id }],
    }),
    createJob: builder.mutation<jobsApiT, Partial<jobsApiT>>({
      query: (body) => ({ url: "jobs/", method: "POST", body }),
      invalidatesTags: ["Jobs"],
    }),
    updateJob: builder.mutation<jobsApiT, { id: number } & Partial<jobsApiT>>({
      query: ({ id, ...body }) => ({
        url: `jobs/${id}/`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Jobs",
        { type: "Jobs", id },
      ],
    }),
    deleteJob: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({ url: `jobs/${id}/`, method: "DELETE" }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobsApi;
