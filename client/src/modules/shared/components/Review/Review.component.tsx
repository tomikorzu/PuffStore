"use client";

import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
  Grow,
  IconButton,
} from "@mui/material";
import { Review as ReviewType } from "./types/review.type";
import { Rating } from "@mui/material";
import { palette } from "@/theme/palette";
import { getTimeByDate } from "../../utils/getDaysByDate.util";
import CollapsibleText from "../CollapsibleText/CollapsibleText.component";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import ReviewModal from "./components/ReviewModal.component";
import WarningModal from "../WarningModal/WarningModal.component";

export default function Review({ review }: { review: ReviewType }) {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  return (
    <>
      <Grow in={true} timeout={1000}>
        <Card sx={{ borderRadius: palette.radius.lg, maxWidth: 300 }}>
          <CardContent>
            <Stack gap={0.5}>
              <Stack direction="row" gap={0.5} justifyContent="space-between">
                <Stack direction="row" gap={1} alignItems="center">
                  <Avatar sizes="10px" src={review.createdBy.image} />
                  <Stack gap={0.25}>
                    <Typography variant="h5" noWrap maxWidth={150}>
                      {review.createdBy.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={{ xs: 10, md: 12 }}
                      fontWeight={600}
                      color={palette.text.disabled}
                    >
                      {getTimeByDate(String(review.date))}
                    </Typography>
                  </Stack>
                </Stack>
                {review.createdBy.id === 1 && (
                  <Stack direction="row">
                    <IconButton onClick={() => setShowReviewModal(true)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => setShowWarningModal(true)}>
                      <Delete />
                    </IconButton>
                  </Stack>
                )}
              </Stack>
              <Rating
                value={review.rating}
                readOnly
                precision={0.5}
                size="small"
              />
              <CollapsibleText text={review.review} />
            </Stack>
          </CardContent>
        </Card>
      </Grow>
      <ReviewModal
        open={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        review={review}
      />
      <WarningModal
        open={showWarningModal}
        onClose={() => setShowWarningModal(false)}
        onAccept={() => {
          console.log("eliminar");
        }}
        title="Eliminar reseña"
        description="¿Estás seguro de querer eliminar esta reseña?"
      />
    </>
  );
}
