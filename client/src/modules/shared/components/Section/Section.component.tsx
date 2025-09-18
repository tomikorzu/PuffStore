import { maxContentWidth } from "@/modules/shared/constants/units";
import { useMediaQueryDevices } from "@/modules/shared/hooks/useMediaQueryDevices.hook";
import { Stack, SxProps, Typography } from "@mui/material";

export default function Section({
  title,
  children,
  sx,
  description,
}: {
  title?: string;
  children: React.ReactNode;
  sx?: SxProps;
  description?: string;
}) {
  const { isMediumAndPhone } = useMediaQueryDevices();
  return (
    <Stack
      component="section"
      gap={2}
      sx={{
        maxWidth: { xs: maxContentWidth.mobile, md: maxContentWidth.desktop },
        width: "100%",
        mx: "auto",
        py: 3,
        px: 2,
        ...sx,
      }}
    >
      {title && <Typography variant="h2">{title}</Typography>}
      {description && (
        <Typography
          variant={isMediumAndPhone ? "body2" : "body1"}
        >
          {description}
        </Typography>
      )}
      {children}
    </Stack>
  );
}
