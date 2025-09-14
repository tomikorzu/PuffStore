import { palette } from "@/theme/palette";
import { Stack } from "@mui/material";

export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      bgcolor={palette.surface.level1Negative}
      position="absolute"
      bottom={0}
      left={0}
      width="100%"
      py={2}
      alignItems="center"
    >
      {children}
    </Stack>
  );
}
