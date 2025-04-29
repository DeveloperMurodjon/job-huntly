"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/services/store/store";

interface LoginRegisterResponse {
  token: string;
  refreshToken: string;
}

interface RefreshResponse {
  access: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mustafocoder.pythonanywhere.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.access;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginRegisterResponse,
      { username: string; password: string }
    >({
      query: (creds) => ({
        url: "login/",
        method: "POST",
        body: creds,
      }),
    }),
    register: builder.mutation<
      LoginRegisterResponse,
      { username: string; password: string }
    >({
      query: (creds) => ({
        url: "register/",
        method: "POST",
        body: creds,
      }),
    }),
    refresh: builder.mutation<RefreshResponse, { refreshToken: string }>({
      query: (payload) => ({
        url: "token/refresh/",
        method: "POST",
        body: { refresh: payload.refreshToken },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useRefreshMutation } =
  authApi;
