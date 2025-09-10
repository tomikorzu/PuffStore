import { palette } from "./palette";

export const typography = {
  allVariants: {
    color: palette.text.enabled,
  },
  body1: {
    fontSize: "clamp(14px, 2vw, 16px)",
    fontWeight: 400,
  },
  body2: {
    fontSize: "clamp(12px, 1vw, 14px)",
    fontWeight: 400,
  },
  h1: {
    fontSize: "clamp(14px, 4vw, 24px)",
    fontWeight: 600,
  },
  h2: {
    fontSize: "clamp(12px, 3vw, 20px)",
    fontWeight: 600,
  },
  h3: {
    fontSize: "clamp(12px, 2vw, 18px)",
    fontWeight: 600,
  },
  h4: {
    fontSize: "clamp(12px, 1vw, 16px)",
    fontWeight: 600,
  },

  h5: {
    fontSize: "clamp(12px, 0.5vw, 14px)",
    fontWeight: 600,
  },
  h6: {
    fontSize: "clamp(12px, 0.2vw, 12px)",
    fontWeight: 600,
  },
  bolder: {
    fontWeight: 700,
  },
};
