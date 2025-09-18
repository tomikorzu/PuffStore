import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { button } from "./components/button";
import { chip } from "./components/chip";
import { dialog } from "./components/dialog";
import { snackbar } from "./components/snackbar";

export const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0, // 0px and above
      sm: 600, // 600px and above
      md: 900, // 900px and above
      lg: 1200, // 1200px and above
      xl: 1440, // 1536px and above
    },
  },
  // @ts-expect-error MUI type mismatch
  components: {
    ...button,
    ...chip,
    ...dialog,
    ...snackbar,
  },
});
