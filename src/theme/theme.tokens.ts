export const colors = {
  black: {
    900: "#121212",
    800: "#1E1E1E",
    700: "#343434",
    600: "#525252",
    500: "#6B6B6B",
    400: "#808080",
    300: "#989898",
    200: "#ACACAC",
    100: "#DBDBDB",
    50: "#F7F7F7",
    25: "#FBFBFB",
    10: "#FAFAFA",
  },
  white: {
    900: "#121212",
    800: "#1E1E1E",
    700: "#343434",
    600: "#525252",
    500: "#6B6B6B",
    400: "#808080",
    300: "#989898",
    200: "#ACACAC",
    100: "#DBDBDB",
    50: "#F7F7F7",
    25: "#FBFBFB",
    10: "#FAFAFA",
  },
};

export const radius = {
  none: 0,
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "16px",
  "2xl": "24px",
  "3xl": "32px",
  pill: "80px",
};

export const surface = {
  level1: colors.black[900],
  level1Negative: colors.white[10],
  level2: colors.black[800],
  level2Negative: colors.white[100],
  level3: colors.black[700],
  level4: colors.black[600],
  level5: colors.black[500],
  level6: colors.black[400],
  neutral: colors.black[500],
};

export const buttons = {
  base: {
    primary: {
      enabled: colors.black[600],
      hovered: colors.black[900],
    },
    secondary: {
      enabled: colors.white[10],
      hovered: colors.black[600],
    },
    disabled: colors.white[700],
  },
  text: {
    contained: {
      enabled: colors.white[10],
      disabled: colors.white[500],
    },
    outlined: {
      enabled: colors.white[10],
      hovered: colors.white[25],
      disabled: colors.white[500],
    },
  },
  radius: {
    xs: radius.xs,
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
  },
};

export const text = {
  enabled: colors.white[10],
  enabledSubtle: colors.white[100],
  enabledNegative: colors.black[900],
  enabledNegativeSubtle: colors.black[800],
  hovered: colors.white[50],
  disabled: colors.white[500],
};

export const icons = {
  contained: {
    enabled: colors.white[10],
  },
};

export const textField = {
  input: {
    enabled: colors.white[10],
    error: colors.white[10],
  },
  label: {
    enabled: colors.white[300],
    focused: colors.white[300],
  },
  border: {
    enabled: colors.black[300],
    enabledSubtle: colors.black[500],
    enabledNegative: colors.black[700],
    hovered: colors.black[200],
    disabled: colors.black[500],
  },
  radius: {
    xs: radius.xs,
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
    xl: radius.xl,
    "2xl": radius["2xl"],
    "3xl": radius["3xl"],
    pill: radius.pill,
  },
};

export const chips = {
  base: {
    enabled: colors.black[600],
    hovered: colors.black[400],
    selected: colors.black[50],
    disabled: colors.black[700],
  },
  text: {
    contained: {
      enabled: colors.black[10],
      enabledNegative: colors.black[900],
      disabled: colors.black[500],
    },
  },
};

export const tags = {
  base: {
    enabled: colors.black[500],
  },
  radius: {
    xs: radius.xs,
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
  },
};

export const states = {};
