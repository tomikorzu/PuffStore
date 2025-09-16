import {
  Typography,
} from "@mui/material";
import Modal from "../Modal/Modal.component";
import { ButtonColor } from "@/theme/types/button.type";

interface WarningModalProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  title: string;
  description?: string;
  acceptText?: string;
  cancelText?: string;
  cancelColor?: ButtonColor;
  acceptColor?: ButtonColor;
}

export default function WarningModal({
  open,
  onClose,
  onAccept,
  title,
  description,
  acceptText = "Aceptar",
  cancelText = "Cancelar",
  cancelColor = "primary",
  acceptColor = "error",
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
      acceptColor={acceptColor}
      cancelColor={cancelColor}
    >
      {description && <Typography variant="body1">{description}</Typography>}
    </Modal>
  );
}
