import Section from "../Section/Section.component";
import { reviews } from "@/modules/shared/mocked/reviews.mock";
import Review from "@/modules/shared/components/Review/Review.component";
import { Review as ReviewType } from "@/modules/shared/components/Review/types/review.type";
import ScrollStack from "@/modules/shared/components/ScrollStack/ScrollStack.component";

export default function CustomerReviews() {
  function getLastRevies(reviews: ReviewType[]) {
    return reviews
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, 10);
  }

  const userReview = reviews.find((review) => review?.createdBy?.id === 1);

  const reviewsToShow = [];
  if (userReview) {
    reviewsToShow.push(userReview);
  }
  reviewsToShow.push(...getLastRevies(reviews as ReviewType[]));
  return (
    reviewsToShow.length > 0 && (
      <Section
        title="Reseñas de nuestros clientes"
        description="Descubrí las opiniones de nuestros clientes"
      >
        <ScrollStack>
          {reviewsToShow.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ScrollStack>
      </Section>
    )
  );
}
