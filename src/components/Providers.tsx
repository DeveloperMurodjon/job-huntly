import { store } from "@/services/store/store";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./themeProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}
export default Providers;
