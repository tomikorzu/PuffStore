import { ButtonPropsVariantOverrides } from "@mui/material";
import { palette } from "../palette";

const sizes = {
  "x-small": {
    padding: "var(--padding-x-small)",
    borderRadius: "var(--border-radius-small)",
    fontSize: "var(--font-size-x-small)",
  },
  small: {
    padding: "var(--padding-small)",
    borderRadius: "var(--border-radius-small)",
    fontSize: "var(--font-size-small)",
  },
  medium: {
    padding: "var(--padding-medium)",
    borderRadius: "var(--border-radius-medium)",
    fontSize: "var(--font-size-medium)",
  },
  large: {
    padding: "var(--padding-large)",
    borderRadius: "var(--border-radius-large)",
    fontSize: "var(--font-size-large)",
  },
};

const colors = ["primary", "secondary", "accent", "destructive"];

const getVariantStyles = (variant: string, color: string) => {
  const base = {
    color: `var(--color-${color})`,
    padding: variant === "text" ? "0" : "var(--padding-${size})",
    textDecoration: variant === "text" ? "underline" : "none",
    borderWidth: variant === "text" ? "0" : "var(--border-width)",
    borderColor:
      variant === "text" ? "transparent" : `var(--border-color-${color})`,
    borderStyle: "solid",
    backgroundColor: `var(--background-color-${color})`,
    "&:hover, &:active": {
      backgroundColor:
        variant === "text"
          ? "transparent"
          : `var(--hover-background-color-${color})`,
      textDecoration: variant === "text" ? "underline" : "none",
      color:
        variant === "text"
          ? `var(--color-${color})`
          : `var(--hover-color-${color})`,
      borderColor:
        variant === "text"
          ? "transparent"
          : `var(--hover-border-color-${color})`,
      borderWidth: variant === "text" ? "0" : "var(--border-width)",
    },
    "&:disabled": {
      backgroundColor:
        variant === "text" || variant === "outlined"
          ? "transparent"
          : palette.buttons.base.disabled,
      borderColor:
        variant === "text" ? "transparent" : palette.buttons.base.disabled,
      color: palette.buttons.text.contained.disabled,
      borderWidth: variant === "text" ? "0" : "var(--border-width)",
    },
    "&:focus-visible, &:focus": {
      outline: "none",
      boxShadow:
        variant === "text"
          ? "none"
          : `0 0 0 2px ${palette.colors.black[900]}, 0 0 0 4px ${palette.colors.black[10]}`,
    },
  };

  if (variant === "outlined") {
    base.backgroundColor = "transparent";
    if (color === "secondary") {
      base.color = palette.buttons.text.outlined.enabled;
      base.borderColor = palette.buttons.text.outlined.enabled;
    }
  }

  if (variant === "text") {
    base.backgroundColor = "transparent";
    base.color = `var(--hover-color-${color})`;
    base.borderColor = "transparent";

    if (color === "destructive") {
      base.color = "var(--background-color-destructive)";
    }
  }

  return base;
};

const variants: ButtonPropsVariantOverrides[] = [];

["contained", "outlined", "text"].forEach((variant) => {
  colors.forEach((color) => {
    Object.entries(sizes).forEach(([size, sizeStyle]) => {
      variants.push({
        props: { variant, color, size },
        style: {
          ...sizeStyle,
          ...getVariantStyles(variant, color),
        },
      });
    });
  });
});

export const button = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
      variant: "contained" as const,
      size: "medium" as const,
      color: "primary" as const,
    },
    styleOverrides: {
      contained: {},
      outlined: {},
      text: {},

      root: {
        "--padding-x-small": "4px 6px",
        "--padding-small": "6px 8px",
        "--padding-medium": "8px 10px",
        "--padding-large": "8px 16px",

        "--border-radius-small": palette.buttons.radius.sm,
        "--border-radius-medium": palette.buttons.radius.md,
        "--border-radius-large": palette.buttons.radius.lg,

        "--font-size-x-small": "14px",
        "--font-size-small": "14px",
        "--font-size-medium": "14px",
        "--font-size-large": "16px",

        "--color-primary": palette.buttons.text.contained.enabled,
        "--color-secondary": palette.buttons.text.contained.enabled,
        "--color-accent": palette.buttons.text.contained.enabled,
        "--color-destructive": palette.buttons.text.contained.enabled,

        "--background-color-primary": palette.buttons.base.primary.enabled,
        "--background-color-secondary": palette.buttons.base.secondary.enabled,
        "--background-color-accent": palette.buttons.base.primary.enabled,
        "--background-color-destructive": palette.buttons.base.primary.enabled,

        "--border-color-primary": palette.buttons.base.primary.enabled,
        "--border-color-secondary": palette.buttons.base.secondary.enabled,
        "--border-color-accent": palette.buttons.base.primary.enabled,
        "--border-color-destructive": palette.buttons.base.primary.enabled,

        "--border-width": "2px",

        "--hover-color-primary": palette.buttons.text.contained.enabled,
        "--hover-color-secondary": palette.buttons.text.contained.enabled,
        "--hover-color-accent": palette.buttons.text.contained.enabled,
        "--hover-color-destructive": palette.buttons.text.contained.enabled,

        "--hover-background-color-primary":
          palette.buttons.base.primary.hovered,
        "--hover-background-color-secondary":
          palette.buttons.base.secondary.hovered,
        "--hover-background-color-accent": palette.buttons.base.primary.hovered,
        "--hover-background-color-destructive":
          palette.buttons.base.primary.hovered,

        "--hover-border-color-primary": "transparent",
        "--hover-border-color-secondary":
          palette.buttons.base.secondary.enabled,
        "--hover-border-color-accent": "transparent",
        "--hover-border-color-destructive": "transparent",

        textTransform: "initial",
        transition: "all 400ms ease",
        fontSize: "var(--font-size-medium)",
        fontWeight: "600",
      },
    },
    variants,
  },
};
