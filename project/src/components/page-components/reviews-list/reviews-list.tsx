import ReviewItem from '../review-item/review-item';
import Button from '../../common/button/button';
import UpBtn from '../../common/up-btn/up-btn';
import { useState } from 'react';
import { REVIEWS_PER_CLICK } from '../../../constants';
import { IReview } from '../../../types/review.interface';

type ReviewsListProps = {
  reviews: IReview[];
  openModalWindow: () => void;
};

function ReviewsList({ reviews, openModalWindow }: ReviewsListProps): JSX.Element {
  const [shownReviews, setShownReviews] = useState(REVIEWS_PER_CLICK);

  const showMoreReviews = () => {
    const moreReviews = shownReviews + REVIEWS_PER_CLICK;
    setShownReviews(moreReviews);
  };

  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <Button
        btnStyle='button--red-border'
        btnType='reviews__sumbit-button'
        btnClickHandler={openModalWindow}
      >
        Оставить отзыв
      </Button>
      {reviews
        .slice(0, shownReviews)
        .map((review) => <ReviewItem key={review.id} review={review} />)}
      {shownReviews < reviews.length &&
        <Button
          btnSize='button--medium'
          btnType='reviews__more-button'
          btnClickHandler={showMoreReviews}
        >
          Показать еще отзывы
        </Button>}
      <UpBtn extraСlass='reviews__up-button' />
    </section>
  );
}

export default ReviewsList;
