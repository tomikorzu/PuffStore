import { Fade, Box, CircularProgress, Modal } from "@mui/material";

export interface MainLoaderProps {
  open: boolean;
}

export default function MainLoader({ open }: MainLoaderProps) {
  return (
    <Modal
      open={open}
      sx={{
        backgroundColor: "#eee",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100vh",
          }}
        >
          <CircularProgress sx={{ color: "#fff" }} />
        </Box>
      </Fade>
    </Modal>
  );
}
