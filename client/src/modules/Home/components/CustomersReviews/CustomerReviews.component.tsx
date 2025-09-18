import Section from "../../../shared/components/Section/Section.component";
import { reviews } from "@/modules/shared/mocked/reviews.mock";
import Review from "@/modules/shared/components/Review/Review.component";
import { Review as ReviewType } from "@/modules/shared/components/Review/types/review.type";
import ScrollStack from "@/modules/shared/components/ScrollStack/ScrollStack.component";
import { Button, Rating, Stack, Typography } from "@mui/material";
import { palette } from "@/theme/palette";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import ReviewModal from "@/modules/shared/components/Review/components/ReviewModal.component";
import { useAuth } from "@/modules/shared/providers/AuthProvider.provider";

export default function CustomerReviews() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const { user } = useAuth();
  const maxReviewsShow = 10;
  function getLastReviews(reviews: ReviewType[]) {
    return reviews
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, 10);
  }

  const totalReviews = reviews.filter((review) => review?.review).length;

  function getAverageReviews(reviews: ReviewType[], totalReviews: number) {
    let totalRating = 0;
    reviews.forEach((review) => (totalRating += review.rating));
    return totalRating / totalReviews;
  }

  const averageReviews = getAverageReviews(
    reviews as ReviewType[],
    totalReviews
  );

  const userReview = reviews.find(
    (review) => review?.createdBy?.id === user?.id
  );

  const reviewsToShow = [];
  if (userReview) {
    reviewsToShow.push(userReview);
  }
  reviewsToShow.push(...getLastReviews(reviews as ReviewType[]));
  if (userReview && reviewsToShow.length > maxReviewsShow) reviewsToShow.pop();

  return (
    reviewsToShow.length > 0 && (
      <Section
        title="Reseñas de nuestros clientes"
        description="Descubrí las opiniones de nuestros clientes"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          bgcolor="#F0F0F0"
          alignItems="center"
          sx={{
            px: 2,
            py: 2,
            borderRadius: palette.radius.xl,
          }}
        >
          <Stack direction="row" gap={1} alignItems="center">
            <Image
              src="/images/logos/logo.png"
              alt="PuffStore"
              width={75}
              height={75}
              style={{
                filter: "brightness(0)",
              }}
            />
            <Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <Typography>{averageReviews.toFixed(1)}</Typography>
                <Rating value={averageReviews} readOnly precision={0.5} />
              </Stack>
              <Typography variant="body2">{totalReviews} reseñas</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            {!userReview && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setShowReviewModal(true)}
              >
                Dejar tu comentario
              </Button>
            )}
            {reviews.length > maxReviewsShow && (
              <Button LinkComponent={NextLink} href="/reviews">
                Ver todas las reseñas
              </Button>
            )}
          </Stack>
        </Stack>
        <ScrollStack>
          {reviewsToShow.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ScrollStack>
        <ReviewModal
          open={showReviewModal}
          onClose={() => setShowReviewModal(false)}
        />
      </Section>
    )
  );
}
