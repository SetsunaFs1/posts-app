import React, { useContext } from "react";
import type { ThemeContextType } from "./themeContextType";

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const useTheme = () => useContext(ThemeContext) as ThemeContextType;