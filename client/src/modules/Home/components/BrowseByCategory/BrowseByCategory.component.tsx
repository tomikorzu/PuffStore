import { Vapers } from "@/modules/shared/constants/product";
import { Box, Card, Grid, Grow, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Section from "../../../shared/components/Section/Section.component";
import { palette } from "@/theme/palette";

const sizes = [
  { xs: 12, md: 4 },
  { xs: 12, md: 8 },
  { xs: 12, md: 8 },
  { xs: 12, md: 4 },
];

export default function BrowseByCategory() {
  return (
    <Section>
      <Stack
        gap={4}
        sx={{
          alignItems: "center",
          bgcolor: "#F0F0F0",
          borderRadius: palette.radius.xl,
          px: { xs: 2, md: 5 },
          py: { xs: 4, md: 5 },
          my: { xs: 2, md: 4 },
        }}
      >
        <Typography variant="h2" textAlign="center">
          Categorías para tu búsqueda
        </Typography>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {Object.values(Vapers).map((vaper, index) => (
            <Grow key={vaper} in timeout={1000}>
              <Grid
                size={sizes[index]}
                sx={{
                  borderRadius: palette.radius.xl,
                  height: 300,
                }}
              >
                <Card
                  component={Link}
                  href={`/vapers?type=${vaper}`}
                  sx={{
                    textDecoration: "none",
                    borderRadius: palette.radius.xl,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    py: 2,
                    px: 4,
                  }}
                >
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    gap={{ xs: 2, md: 0 }}
                    sx={{
                      minHeight: 0,
                    }}
                  >
                    <Typography
                      fontSize={28}
                      textTransform="capitalize"
                      fontWeight={700}
                    >
                      {vaper.replace("_", " ")}
                    </Typography>
                    <Box
                      component="img"
                      src={`/images/vapers/${vaper}.png`}
                      sx={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </Stack>
                </Card>
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}
