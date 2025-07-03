import { useState, type JSX } from "react";
import { ThemeContext } from "./useTheme";
import type { ThemeType } from "./themeContextType";

type IContextProps = {
  children: JSX.Element;
}
export default function ThemeProvider(props: IContextProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
