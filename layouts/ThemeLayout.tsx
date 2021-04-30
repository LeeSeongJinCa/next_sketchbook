import React, { FC, useEffect } from "react";

import { themes, DARK, LIGHT } from "@utils/constants/theme";
import {
  setTheme,
  setThemeMode,
  useThemeDispatch,
  useThemeState,
} from "@utils/contextAPI/theme";

interface Props {}

const ThemeLayout: FC<Props> = ({ children }) => {
  const dispatch = useThemeDispatch();
  const { theme, mode } = useThemeState();

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (storageTheme === DARK) {
      dispatch(setThemeMode(DARK));
    }
  }, []);
  useEffect(() => {
    if (mode === DARK) {
      dispatch(setTheme(themes.dark));
    } else if (mode === LIGHT) {
      dispatch(setTheme(themes.light));
    } else {
      throw Error("can not found mode : " + mode);
    }
  }, [mode]);

  return (
    <>
      <style jsx global>{`
        :root {
          --color: ${theme.color};
          --border-color: ${theme.borderColor};
          --background-color: ${theme.backgroundColor};
          --hight-background-color: ${theme.hightBackgroundColor};
          --box-shadow: ${theme.boxShadow};
        }
        .bb text {
          fill: var(--color);
        }
      `}</style>
      {children}
    </>
  );
};

export default ThemeLayout;
