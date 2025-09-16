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
  green: {
    900: "#005F19",
    800: "#007E2D",
    700: "#138F38",
    600: "#21A143",
    500: "#2BB04C",
    400: "#51BC67",
    300: "#72C882",
    200: "#9CD7A6",
    100: "#C3E7C8",
    50: "#E6F5E9",
    25: "#ECF7EE",
    10: "#F0F8F2",
  },
  red: {
    900: "#8C0001",
    800: "#BE0007",
    700: "#CC0018",
    600: "#D91120",
    500: "#EB2125",
    400: "#F92F24",
    300: "#F54543",
    200: "#EB6A6A",
    100: "#F49594",
    50: "#FFCACF",
    25: "#FFEAED",
    10: "#FFF5F6",
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
      enabled: colors.black[900],
      hovered: colors.black[600],
    },
    secondary: {
      enabled: colors.white[10],
      hovered: colors.black[600],
    },
    disabled: colors.black[500],
    success: {
      enabled: colors.green[700],
      hovered: colors.green[900],
      disabled: colors.green[500],
    },
    error: {
      enabled: colors.red[700],
      hovered: colors.red[900],
      disabled: colors.red[500],
    },
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
      enabled: colors.white[50],
      hovered: colors.black[900],
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
