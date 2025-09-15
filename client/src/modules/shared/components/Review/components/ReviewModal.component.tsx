"use client";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Rating,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import { Review } from "../types/review.type";
import { Close, Edit, Add } from "@mui/icons-material";
import { palette } from "@/theme/palette";
import { useState } from "react";
import { maxInputLength } from "../../../constants/input";

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  review?: Review;
}

export default function ReviewModal({
  open,
  onClose,
  review,
}: ReviewModalProps) {
  const isEditing = review?.id !== undefined;
  const [reviewText, setReviewText] = useState(isEditing ? review?.review : "");
  const [rating, setRating] = useState(isEditing ? review?.rating : 0);
  const handleCancel = () => {
    setReviewText(isEditing ? review?.review : "");
    setRating(isEditing ? review?.rating : 0);
    onClose();
  };
  const handleSave = () => {
    onClose();
  };
  return (
    <Dialog
      open={open}
      onClose={() => {}}
      PaperProps={{
        sx: {
          maxWidth: 500,
          width: "100%",
          borderRadius: palette.radius.lg,
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 8, top: 4 }}
      >
        <Close />
      </IconButton>
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
        {isEditing ? <Edit fontSize="small" /> : <Add fontSize="small" />}
        {isEditing ? "Editar" : "Crear"} reseña
      </DialogTitle>
      <DialogContent sx={{ px: 2, pt: 2, pb: 1 }}>
        <Stack gap={2} pt={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              Calificación:
            </Typography>
            <Rating
              value={rating}
              onChange={(e, value) => setRating(value ?? 0)}
              readOnly={!isEditing}
              precision={0.5}
              size="small"
            />
          </Stack>
          <Stack gap={1}>
            <TextField
              label="Reseña"
              multiline
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Escribe tu reseña aquí"
              inputProps={{
                maxLength: maxInputLength,
              }}
            />
            <Typography
              variant="body2"
              color={palette.text.disabled}
              fontWeight={600}
              textAlign="right"
            >
              {reviewText.length}/{maxInputLength}
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 2 }}>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          disabled={reviewText.length === 0 || rating < 1}
        >
          {isEditing ? "Guardar" : "Crear"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
