import { CheckCircle, Error } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Snackbar as MuiSnackbar, Stack, Typography } from "@mui/material";

interface SnackbarProps {
  text: string;
  open: boolean;
  onClose: () => void;
  variant?: "success" | "error";
}

export default function Snackbar({
  text,
  open,
  onClose,
  variant,
}: SnackbarProps) {
  const icon =
    variant === "success" ? (
      <CheckCircle />
    ) : variant === "error" ? (
      <Error />
    ) : null;
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      message={
        <Stack direction="row" gap={1} alignItems="center">
          {icon}
          <Typography variant="body2">{text}</Typography>
        </Stack>
      }
      action={
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      }
      color={variant}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      sx={{
        mb: { xs: 5, md: 0 },
      }}
    />
  );
}
