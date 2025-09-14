"use client";

import { Button, Divider, Skeleton, Stack, Typography } from "@mui/material";
import { palette } from "@/theme/palette";
import { maxContentWidth } from "@/modules/shared/constants/units";
import Stats from "./components/Stats.component";
import { AutoAwesome } from "@mui/icons-material";
import Banner from "./components/Banner.component";
import { useEffect, useState } from "react";
import { getStrapiData, queryHost } from "@/modules/shared/utils/strapi.util";

interface HomeData {
  title: string;
  description: string;
  image: {
    url: string;
  };
  Stats: {
    id: string;
    title: string;
    description: string;
  }[];
  sponsors: {
    id: string;
    url: string;
  }[];
}

export default function Hero() {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(data);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    getStrapiData("home").then((data) => setData(data.data));
  }, []);

  if (loading) {
    return <Skeleton variant="rectangular" height={500} />;
  }

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
          <Button
            sx={{
              borderRadius: palette.radius.pill,
              maxWidth: { xs: "auto", md: 150 },
            }}
          >
            Shop Now
          </Button>
        </Stack>
        <Stack
          position="relative"
          flex={1}
          sx={{
            width: { xs: "110%", md: "auto" },
            ml: { xs: -2, md: 0 },
          }}
        >
          <AutoAwesome
            sx={{
              position: "absolute",
              top: "30%",
              left: "5%",
              width: 50,
              height: 50,
            }}
          />
          <AutoAwesome
            sx={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: 75,
              height: 75,
            }}
          />
          <img
            src={queryHost! + data?.image?.url || ""}
            alt="Hero Image"
            style={{
              objectFit: "cover",
            }}
          />
        </Stack>
      </Stack>
      {data?.sponsors && (
        <Banner>
          <Stack
            direction="row"
            rowGap={1}
            columnGap={5}
            justifyContent={{ xs: "center", md: "space-between" }}
            width="100%"
            flexWrap="wrap"
            px={{ xs: 2, lg: 0 }}
            py={3}
            maxWidth={{
              xs: maxContentWidth.mobile,
              md: maxContentWidth.desktop,
            }}
          >
            {data?.sponsors?.map((sponsor) => (
              <img
                key={sponsor.id}
                src={queryHost! + sponsor.url || ""}
                alt="Sponsor"
                style={{
                  objectFit: "contain",
                  width: 150,
                  height: 20,
                }}
              />
            ))}
          </Stack>
        </Banner>
      )}
    </Stack>
  );
}
