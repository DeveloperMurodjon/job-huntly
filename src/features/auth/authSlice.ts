import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  access: string | null;
  refresh: string | null;
}

const initialState: AuthState = {
  access: null,
  refresh: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) => {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;

      localStorage.setItem("accessToken", action.payload.access);
      localStorage.setItem("refreshToken", action.payload.refresh);
    },
    logOut: (state) => {
      state.access = null;
      state.refresh = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
