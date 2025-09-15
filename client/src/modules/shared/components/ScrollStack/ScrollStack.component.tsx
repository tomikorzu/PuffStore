import { Stack, SxProps } from "@mui/material";

export default function ScrollStack({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowX: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          height: "1px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0.2)",
          borderRadius: "2px",
          "&:hover": {
            background: "rgba(0, 0, 0, 0.3)",
          },
        },
        gap: 2,
        pb: 1,
        width: "100%",
        "& > *": {
          flexShrink: 0,
        },
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}
