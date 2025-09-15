import { maxContentWidth } from "@/modules/shared/constants/units";
import { Stack, SxProps, Typography } from "@mui/material";

export default function Section({
  title,
  children,
  sx,
  description,
}: {
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
  description?: string;
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
        px: 2,
        ...sx,
      }}
    >
      <Typography variant="h2" textAlign="center">
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" textAlign="center">
          {description}
        </Typography>
      )}
      {children}
    </Stack>
  );
}
