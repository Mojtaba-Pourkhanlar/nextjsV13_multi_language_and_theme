import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "@/theme";
import { i18n } from "next-i18next";

const MuiThemeProvider = ({ children }) => {
  const lang = i18n?.language;
  const isDarkMode = useSelector((state) => state.root.darkMode);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const storedMode = localStorage.getItem("dark");
    if (storedMode !== null) {
      setMode(storedMode === "true" ? "dark" : "light");
    }
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDarkMode]);

  const themeDirection = lang === "fa" ? "rtl" : "ltr";

  // const theme = createTheme(themeSettings(mode));
  const theme = createTheme(themeSettings(mode), {
    direction: themeDirection,
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
