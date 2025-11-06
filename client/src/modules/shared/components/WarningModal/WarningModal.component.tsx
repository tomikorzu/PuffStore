import { Button, Typography } from "@mui/material";
import ModalWrapper from "../ModalWrapper/ModalWrapper.component";

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
    <ModalWrapper
      open={open}
      onClose={onClose}
      title={title}
      useDesktopStylesForMobile
      useCloseButton={false}
      buttons={
        <>
          <Button onClick={onClose}>{cancelText}</Button>
          <Button onClick={onAccept} color="error">
            {acceptText}
          </Button>
        </>
      }
    >
      {description && <Typography variant="body1">{description}</Typography>}
    </ModalWrapper>
  );
}
