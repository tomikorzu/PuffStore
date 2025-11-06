import { palette } from "@/theme/palette";
import * as Icons from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { useMediaQueryDevices } from "../../hooks/useMediaQueryDevices.hook";

interface ModalWrapperProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  Icon?: React.ElementType;
  useDesktopStylesForMobile?: boolean;
  useCloseButton?: boolean;
  buttons?: React.ReactNode;
  backgroundColor?: string | object;
  bordered?: boolean;
}

export default function ModalWrapper({
  open,
  onClose,
  children,
  title,
  Icon,
  useCloseButton = true,
  useDesktopStylesForMobile = false,
  buttons,
  backgroundColor = palette.surface.level2Negative,
  bordered,
}: ModalWrapperProps) {
  const { isMediumAndPhone } = useMediaQueryDevices();
  const bgcolor = backgroundColor;
  const CloseButton = ({ sx }: { sx?: SxProps }) => (
    <IconButton onClick={onClose} sx={{ ...sx }}>
      <Icons.Close />
    </IconButton>
  );

  const border = `1px solid ${palette.textField.border.enabledSubtle}`;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      fullScreen={isMediumAndPhone && !useDesktopStylesForMobile}
      maxWidth="sm"
      PaperProps={{
        sx: {
          backgroundImage: "none",
          bgcolor,
          borderRadius: {
            xs: !useDesktopStylesForMobile ? 0 : palette.radius.md,
            md: palette.radius.md,
          },
          border: { xs: 0, md: bordered ? border : "none" },
          height:
            !useDesktopStylesForMobile && isMediumAndPhone ? "100dvh" : "auto",
          maxHeight:
            !useDesktopStylesForMobile && isMediumAndPhone ? "100dvh" : "85dvh",
        },
      }}
    >
      {title && (
        <DialogTitle
          sx={{ position: "relative", borderBottom: border, px: 2, py: 2 }}
        >
          <Stack
            direction="row"
            justifyContent={{
              xs: !useDesktopStylesForMobile ? "center" : "start",
              md: "start",
            }}
            alignItems="center"
            gap={1}
          >
            <Stack direction="row" gap={1} alignItems="center">
              {Icon &&
                (useDesktopStylesForMobile ||
                  (!useDesktopStylesForMobile && !isMediumAndPhone)) && (
                  <Icon fontSize="small" />
                )}
              <Typography
                fontWeight={{
                  xs: useDesktopStylesForMobile ? 600 : 400,
                  md: 600,
                }}
              >
                {title}
              </Typography>
            </Stack>
            {useCloseButton && (
              <CloseButton
                sx={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </Stack>
        </DialogTitle>
      )}
      {useCloseButton && !title && !isMediumAndPhone && (
        <CloseButton
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      )}
      <DialogContent sx={{ px: 2, pt: "16px !important", pb: 1 }}>
        {children}
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: { xs: !useDesktopStylesForMobile ? border : "none", md: "none" } }}>
        <Stack
          direction="row"
          gap={1}
          flex={{ xs: !useDesktopStylesForMobile ? 1 : "initial", md: "initial" }}
          sx={{ "& .MuiButton-root": { flex: { xs: !useDesktopStylesForMobile ? 1 : "initial", md: "initial" } } }}
        >
          {buttons}
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
