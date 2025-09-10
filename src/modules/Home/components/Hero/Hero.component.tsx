import { Button, Divider, Stack, Typography } from "@mui/material";
import { palette } from "@/theme/palette";
import { maxContentWidth } from "@/modules/shared/constants/units";
import Stats from "./components/Stats.component";

export default function Hero() {
  return (
    <Stack bgcolor={palette.surface.level3} alignItems="center">
      <Stack sx={{ maxWidth: maxContentWidth }}>
        <Stack gap={3} maxWidth={600}>
          <Typography variant="h2" textTransform="uppercase">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Typography>
          <Typography>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Typography>
          <Button sx={{ borderRadius: palette.radius.pill, maxWidth: 150 }}>
            Shop Now
          </Button>
          <Stack
            direction="row"
            gap={3}
            divider={
              <Divider
                orientation="vertical"
                sx={{ borderWidth: 0.5, height: "auto" }}
              />
            }
          >
            <Stats title="200+" value="International Brands" />
            <Stats title="2,000+" value="High-Quality Products" />
            <Stats title="30,000+" value="Happy Customers" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
