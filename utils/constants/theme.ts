export const LIGHT = "light" as const;
export const DARK = "dark" as const;

export type Theme = {
  hightBackgroundColor: string;
  backgroundColor: string;
  borderColor: string;
  boxShadow: string;
  color: string;
};

type Themes = Record<typeof LIGHT | typeof DARK, Theme>;

export const themes: Themes = {
  light: {
    hightBackgroundColor: "#f1f1f1",
    backgroundColor: "#fafafa",
    borderColor: "#dddddd",
    boxShadow: "#e2e2e2",
    color: "#242424",
  },
  dark: {
    hightBackgroundColor: "#202633",
    backgroundColor: "#101421",
    borderColor: "#cfcfcf40",
    boxShadow: "#00000006",
    color: "#b7c1cc",
  },
};
