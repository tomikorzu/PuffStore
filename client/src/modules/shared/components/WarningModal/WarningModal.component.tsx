import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Dialog } from "@mui/material";

interface WarningModalProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  title?: string;
  description?: string;
  acceptText?: string;
  cancelText?: string;
}

export default function WarningModal({
  open,
  onClose,
  onAccept,
  title,
  description,
  acceptText = "Aceptar",
  cancelText = "Cancelar",
}: WarningModalProps) {
  return (
    <Dialog open={open} onClose={() => {}}>
      <DialogTitle variant="body1" fontWeight={600}>
        {title}
      </DialogTitle>
      <DialogContent>
        {description && <Typography variant="body1">{description}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelText}</Button>
        <Button onClick={onAccept}>{acceptText}</Button>
      </DialogActions>
    </Dialog>
  );
}
