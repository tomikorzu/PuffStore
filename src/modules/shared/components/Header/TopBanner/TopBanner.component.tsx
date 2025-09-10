"use client";

import { palette } from "@/theme/palette";
import { Button, Stack, Typography } from "@mui/material";
import { maxContentWidth } from "@/modules/shared/constants/units";

export default function TopBanner() {
  return (
    <Stack
      bgcolor={palette.surface.level1Negative}
      alignItems="center"
      py={1}
      px={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={0.5}
        sx={{
          width: "100%",
          maxWidth: maxContentWidth,
        }}
      >
        <Typography variant="body2" color="secondary">
          Sign up and get 20% off to your first order.
        </Typography>
        <Button
          color="primary"
          variant="text"
          sx={{ fontSize: "clamp(12px, 1vw, 14px)" }}
        >
          Sign Up Now
        </Button>
      </Stack>
    </Stack>
  );
}
