import { palette } from "../palette";

export const snackbar = {
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        "--background-color-success": palette.colors.green[25],
        "--color-success": palette.colors.green[700],

        "--background-color-error": palette.colors.red[25],
        "--color-error": palette.colors.red[200],
        "& svg": {
          fontSize: 22,
          color: palette.text.enabled,
        },
        "& p": {
          color: palette.text.enabled,
          fontWeight: 500,
        },
      },
    },
    variants: [
      {
        props: { color: "error" },
        style: {
          backgroundColor: "var(--background-color-error)",
          "& p, & svg": {
            color: "var(--color-error)",
          },
        },
      },
      {
        props: { color: "success" },
        style: {
          backgroundColor: "var(--background-color-success)",
          "& p, & svg": {
            color: "var(--color-success)",
          },
        },
      },
    ],
  },
};
