"use client";

import { TextField, Rating, Stack, Typography } from "@mui/material";
import { Review } from "../types/review.type";
import { Edit, Add } from "@mui/icons-material";
import { palette } from "@/theme/palette";
import { useState } from "react";
import { maxInputLength } from "../../../constants/input";
import Modal from "../../Modal/Modal.component";
import Snackbar from "../../Snackbar/Snackbar.component";

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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [rating, setRating] = useState(isEditing ? review?.rating : 0);
  const handleCancel = () => {
    setReviewText(isEditing ? review?.review : "");
    setRating(isEditing ? review?.rating : 0);
    onClose();
  };
  const handleSave = () => {
    onClose();
    setOpenSnackbar(true);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        title={isEditing ? "Editar reseña" : "Crear reseña"}
        Icon={isEditing ? Edit : Add}
        onAccept={handleSave}
        onCancel={handleCancel}
        acceptText={isEditing ? "Guardar" : "Crear"}
        cancelText="Cancelar"
        disableAccept={reviewText.length === 0 || rating < 1}
        acceptColor="success"
      >
        <Stack gap={2}>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              Calificación:
            </Typography>
            <Rating
              value={rating}
              onChange={(e, value) => setRating(value ?? 0)}
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
      </Modal>
      <Snackbar
        text={`Reseña ${isEditing ? "editada" : "creada"} correctamente`}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        variant="success"
      />
    </>
  );
}
