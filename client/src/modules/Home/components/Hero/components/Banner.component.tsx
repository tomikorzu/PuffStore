import { maxContentWidth } from "@/modules/shared/constants/units";
import { palette } from "@/theme/palette";
import { Stack, Typography } from "@mui/material";

export default function Banner() {
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
      <Stack
        direction="row"
        rowGap={1}
        columnGap={5}
        justifyContent={{ xs: "center", md: "space-between" }}
        width="100%"
        flexWrap="wrap"
        px={{ xs: 2, lg: 0 }}
        maxWidth={{ xs: maxContentWidth.mobile, md: maxContentWidth.desktop }}
      >
        <Typography color="secondary" fontSize={{ xs: 24, md: 40 }}>
          VERSACE
        </Typography>
        <Typography color="secondary" fontSize={{ xs: 24, md: 40 }}>
          ZARA
        </Typography>
        <Typography color="secondary" fontSize={{ xs: 24, md: 40 }}>
          GUCCI
        </Typography>
        <Typography color="secondary" fontSize={{ xs: 24, md: 40 }}>
          PRADA
        </Typography>
        <Typography color="secondary" fontSize={{ xs: 24, md: 40 }}>
          Calvin Klein
        </Typography>
      </Stack>
    </Stack>
  );
}
