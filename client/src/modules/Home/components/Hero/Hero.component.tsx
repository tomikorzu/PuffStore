import { Button, Divider, Stack, Typography } from "@mui/material";
import { palette } from "@/theme/palette";
import { maxContentWidth } from "@/modules/shared/constants/units";
import Stats from "./components/Stats.component";
import { queryHost } from "@/modules/shared/utils/strapi.util";
import { HomeData } from "@/modules/shared/types/strapiTypes.type";

export default function Hero({ data }: { data: HomeData }) {
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
          px: { xs: 2, lg: 0 },
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
            {data?.title}
          </Typography>
          <Typography>{data?.description}</Typography>

          {data?.Stats && (
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
              {data?.Stats?.map((stat) => (
                <Stats
                  key={stat.id}
                  title={stat.title}
                  value={stat.description}
                />
              ))}
            </Stack>
          )}
          <Button
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
            width: { xs: "110%", md: "auto" },
            ml: { xs: -2, md: 0 },
          }}
        >
          <img
            src={queryHost! + data?.image?.url || ""}
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
