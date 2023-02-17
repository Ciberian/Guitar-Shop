import Rating from '../../common/rating/rating';
import { IReview } from '../../../types/review.interface';

type ReviewItemProps = {
  review: IReview;
};

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { author, advantage, disadv, comment, rating, date } = review;
  const formattedDate = date.toLocaleString('ru', {month: 'long', day: 'numeric'});

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{author.name}</h4>
        <span className="review__date">{formattedDate}</span>
      </div>
      <Rating extraСlass='review__rating-panel' ratingValue={rating} />
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantage}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadv}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{comment}</p>
    </div>
  );
}

export default ReviewItem;
