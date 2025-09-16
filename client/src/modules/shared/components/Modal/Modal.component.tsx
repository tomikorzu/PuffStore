import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { palette } from "@/theme/palette";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  Icon?: React.ElementType;
  buttons?: React.ReactNode;
  onAccept?: () => void;
  acceptText?: string;
  cancelText?: string;
  onCancel?: () => void;
  disableAccept?: boolean;
  disableCancel?: boolean;
  useCloseButton?: boolean;
}

export default function Modal({
  children,
  open,
  onClose,
  title,
  Icon,
  buttons,
  onAccept,
  onCancel = onClose,
  acceptText = "Aceptar",
  cancelText = "Cancelar",
  disableAccept = false,
  disableCancel = false,
  useCloseButton = true,
}: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={() => {}}
      PaperProps={{
        sx: {
          maxWidth: 500,
          width: "100%",
        },
      }}
    >
      {useCloseButton && (
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 4 }}
        >
          <Close />
        </IconButton>
      )}
      <DialogTitle
        variant="body1"
        fontWeight={600}
        sx={{
          px: 2,
          py: 1.5,
          borderBottom: `1px solid ${palette.textField.border.enabled}`,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {Icon && <Icon fontSize="small" />}
        {title}
      </DialogTitle>
      <DialogContent sx={{ px: 2, pt: '16px !important', pb: 1 }}>{children}</DialogContent>
      <DialogActions sx={{ px: 2 }}>
        {buttons ? (
          buttons
        ) : (
          <>
            <Button onClick={onCancel} disabled={disableCancel}>
              {cancelText}
            </Button>
            <Button onClick={onAccept} disabled={disableAccept}>
              {acceptText}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
