import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { palette } from "@/theme/palette";
import { maxContentWidth } from "@/modules/shared/constants/units";
import Stats from "./components/Stats.component";
import { ShoppingBag } from "@mui/icons-material";

const stats = [
  { title: "50+", description: "Sabores para elegir" },
  { title: "100+", description: "Reseñas de usuarios" },
  { title: "200+", description: "Ventas realizadas" },
];

export default function Hero() {
  return (
    <Stack
      component="section"
      bgcolor={palette.surface.level3}
      alignItems="center"
      position="relative"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          maxWidth: { xs: maxContentWidth.mobile, md: maxContentWidth.desktop },
          width: "100%",
          pt: { xs: 5, md: 0 },
          px: { xs: 2, xl: 0 },
        }}
      >
        <Stack gap={3} flex={0.9} justifyContent="center">
          <Typography
            variant="h2"
            textTransform="uppercase"
            fontSize={{ xs: 36, lg: 60 }}
            lineHeight={1}
            fontWeight={700}
            maxWidth={{ xs: 300, md: "initial" }}
          >
            Tu mundo de vapers, en un solo lugar
          </Typography>
          <Typography>
            Variedad, calidad y los sabores que más te gustan. Comprá fácil y
            recibí en tu casa
          </Typography>

          {stats && (
            <Stack
              direction="row"
              gap={3}
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "start" }}
              divider={
                <Divider
                  orientation="vertical"
                  sx={{ borderWidth: 0.5, height: "auto" }}
                />
              }
            >
              {stats?.map((stat) => (
                <Stats
                  key={stat.title}
                  title={stat.title}
                  value={stat.description}
                />
              ))}
            </Stack>
          )}
          <Button
            startIcon={<ShoppingBag fontSize="small" />}
            sx={{
              borderRadius: palette.radius.pill,
              maxWidth: { xs: "auto", md: "fit-content" },
              px: 3,
            }}
          >
            Ver tienda
          </Button>
        </Stack>
        <Stack
          position="relative"
          flex={0.7}
          sx={{
            overflow: "hidden",
            width: { xs: "110%", md: "auto" },
            ml: { xs: -2, md: 0 },
          }}
        >
          <Box
            component="img"
            src="/images/home/hero.png"
            alt="Hero Image"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
