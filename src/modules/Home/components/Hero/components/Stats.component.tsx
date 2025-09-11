import { Stack, Typography } from "@mui/material";

export default function Stats({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Stack>
      <Typography fontSize={{ xs: 24, md: 32 }} fontWeight={700}>
        {title}
      </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}
