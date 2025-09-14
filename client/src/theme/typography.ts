import { palette } from "./palette";

export const typography = {
  allVariants: {
    color: palette.text.enabled,
    fontFamily: ["Montserrat", "Candal", "sans-serif"].join(","),
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
    fontSize: "32px",
    fontWeight: 700,
    fontFamily: "Candal",
  },
  h2: {
    fontSize: "60px",
    fontWeight: 700,
    fontFamily: "Candal",
  },
  h3: {
    fontSize: "48px",
    fontWeight: 700,
    fontFamily: "Candal",
  },
  h4: {
    fontSize: "40px",
    fontWeight: 700,
    fontFamily: "Candal",
  },

  h5: {
    fontSize: "clamp(12px, 0.5vw, 14px)",
    fontWeight: 700,
    fontFamily: "Candal",
  },
  h6: {
    fontSize: "clamp(12px, 0.2vw, 12px)",
    fontWeight: 700,
    fontFamily: "Candal",
  },
  bolder: {
    fontWeight: 700,
  },
};
