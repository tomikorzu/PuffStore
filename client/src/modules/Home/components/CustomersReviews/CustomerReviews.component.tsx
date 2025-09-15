import { Stack } from "@mui/material";
import Section from "../Section/Section.component";
import { reviews } from "@/modules/shared/mocked/reviews.mock";
import Review from "@/modules/shared/components/Review/Review.component";
import { Review as ReviewType } from "@/modules/shared/components/Review/types/review.type";

export default function CustomerReviews() {
  function getLastRevies(reviews: ReviewType[]) {
    return reviews
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, 10);
  }
  return (
    <Section
      title="Reseñas de nuestros clientes"
      description="Descubrí las opiniones de nuestros clientes"
    >
      <Stack
        direction="row"
        sx={{
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          gap: 2,
          pb: 1,
          width: "100%",
          "& > *": {
            flexShrink: 0,
          },
        }}
      >
        {getLastRevies(reviews as ReviewType[]).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </Stack>
    </Section>
  );
}
