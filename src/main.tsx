import React from "react";
import ReactDOM from "react-dom/client";
import RimakApp from "./RimakApp.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RimakApp />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
