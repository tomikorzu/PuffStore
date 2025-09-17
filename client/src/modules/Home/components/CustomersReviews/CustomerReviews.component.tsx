import Section from "../Section/Section.component";
import { reviews } from "@/modules/shared/mocked/reviews.mock";
import Review from "@/modules/shared/components/Review/Review.component";
import { Review as ReviewType } from "@/modules/shared/components/Review/types/review.type";
import ScrollStack from "@/modules/shared/components/ScrollStack/ScrollStack.component";
import { Rating, Stack, Typography } from "@mui/material";
import { palette } from "@/theme/palette";

export default function CustomerReviews() {
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

  const userReview = reviews.find((review) => review?.createdBy?.id === 1);

  const reviewsToShow = [];
  if (userReview) {
    reviewsToShow.push(userReview);
  }
  reviewsToShow.push(...getLastReviews(reviews as ReviewType[]));
  if (userReview) reviewsToShow.pop();
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
          sx={{
            px: 2,
            py: 2,
            borderRadius: palette.radius.xl,
          }}
        >
          <Stack>
            <Stack direction="row" gap={1} alignItems="center">
              <Typography variant="h5">PUFFSTORE</Typography>
              <Typography>{averageReviews.toFixed(1)}</Typography>
              <Rating value={averageReviews} readOnly precision={0.5} />
            </Stack>
            <Typography>Total de reseñas: {totalReviews}</Typography>
          </Stack>
          <Stack></Stack>
        </Stack>
        <ScrollStack>
          {reviewsToShow.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ScrollStack>
      </Section>
    )
  );
}
