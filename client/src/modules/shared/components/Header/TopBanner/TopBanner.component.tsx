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
        <Typography variant="body2" color="secondary" textAlign="center">
          Registrate y conseguí un 20% de descuento en tu primera compra.{" "}
          <Link
            href="/login"
            color="secondary"
            component={NextLink}
            sx={{
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Aquí
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
