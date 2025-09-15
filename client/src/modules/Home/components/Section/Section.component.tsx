import { maxContentWidth } from "@/modules/shared/constants/units";
import { Stack, SxProps, Typography } from "@mui/material";

export default function Section({
  title,
  children,
  sx,
}: {
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Stack
      component="section"
      alignItems="center"
      gap={3}
      sx={{
        maxWidth: { xs: maxContentWidth.mobile, md: maxContentWidth.desktop },
        width: "100%",
        mx: "auto",
        py: 3,
        ...sx,
      }}
    >
      <Typography variant="h2">{title}</Typography>
      {children}
    </Stack>
  );
}
