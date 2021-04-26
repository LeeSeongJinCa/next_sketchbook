import React, { useReducer, useContext, createContext, Dispatch } from "react";

import { DARK, LIGHT } from "@utils/constants/theme";

export const SET_THEME = "theme/SET_THEME" as const;

export type Theme = typeof LIGHT | typeof DARK;

export type ThemeState = {
  theme: Theme;
};

export const setTheme = ({ theme }: ThemeState) => ({
  type: SET_THEME,
  payload: theme,
});

type ThemeAction = ReturnType<typeof setTheme>;

type ThemeDispatch = Dispatch<ThemeAction>;

const trashInitialState: ThemeState = {
  theme: LIGHT,
};

const ThemeStateContext = createContext<ThemeState>({ ...trashInitialState });
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

const reducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
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
