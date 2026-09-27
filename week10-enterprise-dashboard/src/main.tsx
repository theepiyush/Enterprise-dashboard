import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppProviders } from "@/app/providers/AppProviders";
import App from "@/app/App";
import "@/styles/global.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2563eb" },
    background: { default: "#f8fafc" }
  },
  typography: { fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" },
  shape: { borderRadius: 12 }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProviders>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProviders>
    </ThemeProvider>
  </React.StrictMode>
);