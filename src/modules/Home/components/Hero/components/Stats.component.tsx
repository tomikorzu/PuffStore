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
      <Typography variant="h4">{title}</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
}
