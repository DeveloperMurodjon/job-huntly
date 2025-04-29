"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/services/store/store";
import { usersApiT } from "@/lib/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mustafocoder.pythonanywhere.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.access;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<usersApiT[], void>({
      query: () => "users/",
      providesTags: ["Users"],
    }),
    getUserById: builder.query<usersApiT, string>({
      query: (id) => `users/${id}/`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    createUser: builder.mutation<usersApiT, Partial<usersApiT>>({
      query: (body) => ({ url: "users/", method: "POST", body }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation<
      usersApiT,
      { id: number } & Partial<usersApiT>
    >({
      query: ({ id, ...rest }) => ({
        url: `users/${id}/`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Users",
        { type: "Users", id },
      ],
    }),
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({ url: `users/${id}/`, method: "DELETE" }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
