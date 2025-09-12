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
    900: "#000",
    800: "#1E1E1E",
    700: "#F2F0F1",
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
  level1: colors.white[10],
  level1Negative: colors.black[900],
  level2: colors.white[800],
  level2Negative: colors.white[100],
  level3: colors.white[700],
  level4: colors.white[600],
  level5: colors.white[500],
  level6: colors.white[400],
  neutral: colors.white[500],
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
      enabled: colors.black[10],
      hovered: colors.black[600],
      disabled: colors.white[700],
    },
    outlined: {
      enabled: colors.white[10],
      hovered: colors.black[600],
      disabled: colors.white[700],
    },
    text: {
      enabled: colors.white[10],
      hovered: colors.black[600],
      disabled: colors.white[700],
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
  enabled: colors.black[900],
  hovered: colors.white[50],
  disabled: colors.white[500],
  secondary: colors.white[10],
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
