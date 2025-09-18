import { palette } from "../palette";

export const chip = {
  MuiChip: {
    styleOverrides: {
      root: {
        "--background-color-error": palette.colors.red[25],
        "--color-error": palette.colors.red[200],
        variants: [
          {
            props: { color: "error" },
            style: {
              backgroundColor: "var(--background-color-error)",
              color: "var(--color-error)",
              fontWeight: 600,
            },
          },
        ],
      },
    },
  },
};
