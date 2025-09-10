"use client";

import { theme } from "@/theme/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles, darkScrollbar } from "@mui/material";
import { palette } from "@/theme/palette";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            scrollBehavior: "smooth",
            ...darkScrollbar(),
            scrollbarWidth: "thin",
          },
          body: {
            backgroundColor: palette.surface.level1,
            color: palette.text.enabled,
          },
        }}
      />
      {children}
    </MuiThemeProvider>
  );
}
