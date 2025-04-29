"use client";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/services/store/store";
import { ThemeProvider } from "./themeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRefreshMutation } from "@/services/authApiSlice";
import { setCredentials, logOut } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

function AuthLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const [refresh] = useRefreshMutation();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("refreshToken");
    if (!stored) {
      setReady(true);
      return;
    }
    refresh({ refreshToken: stored })
      .unwrap()
      .then(({ access }) => {
        dispatch(setCredentials({ access, refresh: stored }));
      })
      .catch(() => {
        dispatch(logOut());
        router.replace("/login");
      })
      .finally(() => setReady(true));
  }, [dispatch, refresh, router]);

  if (!ready) return <div>Loading...</div>;
  return <>{children}</>;
}

export default function Providers({ children }: any) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AuthLoader>
          <Header />
          {children}
          <Footer />
        </AuthLoader>
      </ThemeProvider>
    </Provider>
  );
}
