import ReviewItem from '../review-item/review-item';
import { Review } from '../../../types/user-data.interface';
import dayjs from 'dayjs';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const offerReviews = [...reviews];
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {offerReviews
          .sort((reviewA, reviewB) => dayjs(reviewB.date).diff(dayjs(reviewA.date), 'second'))
          .slice(0, 10)
          .map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
      </ul>
    </>
  );
}

export default ReviewsList;
