import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Dialog } from "@mui/material";
import Modal from "../Modal/Modal.component";

interface WarningModalProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  title: string;
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
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      onAccept={onAccept}
      onCancel={onClose}
      acceptText={acceptText}
      cancelText={cancelText}
      useCloseButton={false}
    >
      {description && <Typography variant="body1">{description}</Typography>}
    </Modal>
  );
}
