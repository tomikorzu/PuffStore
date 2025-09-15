export const chip = {
  MuiChip: {
    styleOverrides: {
      root: {
        "--background-color-error": "#fee2e2",
        "--color-error": "#f87171",
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
