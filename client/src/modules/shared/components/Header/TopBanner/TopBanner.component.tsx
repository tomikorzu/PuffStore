  "use client";

import { palette } from "@/theme/palette";
import { Link, Stack, Typography } from "@mui/material";
import { maxContentWidth } from "@/modules/shared/constants/units";
import NextLink from "next/link";

export default function TopBanner() {
  return (
    <Stack
      bgcolor={palette.surface.level1Negative}
      alignItems="center"
      py={1}
      px={2}
    >
      <Stack
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: { xs: maxContentWidth.mobile, md: maxContentWidth.desktop },
        }}
      >
        <Typography variant="body2" color="secondary">
          Sign up and get 20% off to your first order.{" "}
          <Link
            href="/login"
            color="secondary"
            component={NextLink}
            sx={{
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Sign Up Now
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
