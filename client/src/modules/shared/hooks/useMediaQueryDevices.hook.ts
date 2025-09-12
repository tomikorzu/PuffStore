"use client";

import { useMediaQuery, useTheme } from "@mui/material";

export const useMediaQueryDevices = () => {
  const theme = useTheme();

  const isPhone = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.sm)
  );
  const isXLDesktop = useMediaQuery(
    theme.breakpoints.up(theme.breakpoints.values.xl)
  );
  const isDesktop = useMediaQuery(
    theme.breakpoints.between(
      theme.breakpoints.values.sm,
      theme.breakpoints.values.lg
    )
  );
  const isLargeDesktop = useMediaQuery(
    theme.breakpoints.up(theme.breakpoints.values.lg)
  );

  const isMediumAndPhone = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.md)
  );

  return {
    isDesktop,
    isPhone,
    isLargeDesktop,
    isMediumAndPhone,
    isXLDesktop,
  };
};
