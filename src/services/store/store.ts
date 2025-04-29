import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import { authApi } from "../authApiSlice";
import { usersApi } from "../usersApiSlice";
import { jobsApi } from "../jobsApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (g) =>
    g().concat(authApi.middleware, usersApi.middleware, jobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
