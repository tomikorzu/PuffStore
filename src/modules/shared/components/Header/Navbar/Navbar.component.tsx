"use client";

import {
  Autocomplete,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { palette } from "@/theme/palette";
import { maxContentWidth } from "@/modules/shared/constants/units";
import { links } from "./links.util";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Stack bgcolor={palette.surface.level1} alignItems="center" py={3} px={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
        sx={{
          width: "100%",
          maxWidth: maxContentWidth,
        }}
      >
        <Link href="/" component={NextLink} sx={{ textDecoration: "none" }}>
          <Typography variant="h1" textTransform="uppercase" fontWeight={700}>
            zennify
          </Typography>
        </Link>
        <Stack
          component="nav"
          direction="row"
          gap={3}
          sx={{ minWidth: "fit-content" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              component={NextLink}
              sx={{ textTransform: "capitalize", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
        <Autocomplete
          options={["search", "search2", "search3", "search4", "search5"]}
          renderInput={(params) => (
            <Stack position="relative">
              <TextField
                {...params}
                placeholder="Search for products..."
                sx={{
                  backgroundColor: "#00000040",
                  borderRadius: palette.radius.pill,
                  "& fieldset": {
                    border: "none",
                  },
                  "& .MuiInputBase-root": {
                    py: 1,
                  },
                  "& input": {
                    ml: 4,
                  },
                  width: "100%",
                }}
              />
              <Search
                sx={{
                  position: "absolute",
                  left: 15,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
            </Stack>
          )}
          sx={{
            width: "100%",
            maxWidth: "600px",
          }}
        />
        <Stack direction="row" gap={1}>
          <IconButton>
            <ShoppingCart />
          </IconButton>
          <IconButton>
            <Person />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
