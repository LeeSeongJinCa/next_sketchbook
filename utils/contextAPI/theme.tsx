import React, { useReducer, useContext, createContext, Dispatch } from "react";

import { DARK, LIGHT, Theme, themes } from "@utils/constants/theme";

export const SET_THEME_MODE = "theme/SET_THEME_MODE" as const;
export const SET_THEME = "theme/SET_THEME" as const;

export type ThemeMode = typeof LIGHT | typeof DARK;

export type ThemeState = {
  mode: ThemeMode;
  theme: Theme;
};

export const setThemeMode = (mode: ThemeMode) => ({
  type: SET_THEME_MODE,
  payload: mode,
});
export const setTheme = (theme: Theme) => ({
  type: SET_THEME,
  payload: theme,
});

type ThemeAction = ReturnType<typeof setThemeMode | typeof setTheme>;

type ThemeDispatch = Dispatch<ThemeAction>;

const trashInitialState: ThemeState = {
  mode: LIGHT,
  theme: themes.light,
};

const ThemeStateContext = createContext<ThemeState>({ ...trashInitialState });
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

const reducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case SET_THEME_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      throw new Error("Unhandled action");
  }
};

export const ThemeProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...trashInitialState });

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export function useThemeState() {
  const state = useContext(ThemeStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}

export function isDarkMode() {
  const { mode: theme } = useContext(ThemeStateContext);

  return theme === DARK;
}
