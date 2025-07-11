import React, { useContext } from "react";
import type { ThemeContextType } from "./themeContextType";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext) as ThemeContextType;
  if (!context) console.error("Error Context");
  return context;
};
