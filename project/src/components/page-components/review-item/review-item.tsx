import dayjs from 'dayjs';
import { IReview } from '../../../types/review.interface';
import { ONE_STAR_RATING_IN_PERCENT } from '../../../constants';

type ReviewItemProps = {
  review: IReview;
};

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { author, rating, comment, date } = review;
  const formattedDate = dayjs(date).format('MMMM YYYY');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{author.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * ONE_STAR_RATING_IN_PERCENT}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date.toISOString()}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
