import { RATINGS, RATING_TITLES } from '../../../constants';

interface IRatingProps {
  extraСlass?: string;
  ratingValue?: number;
  reviewsCount?: number;
}

function Rating({ extraСlass = '', ratingValue = 0, reviewsCount = 0 }: IRatingProps): JSX.Element {
  const starWidth = extraСlass === 'review__rating-panel' ? '16' : '12';
  const starHeight = extraСlass === 'review__rating-panel' ? '16' : '11';

  return (
    <div className={`rate ${extraСlass}`}>
      {RATINGS.map((rating) => (
        <svg key={`key-${rating}`} width={starWidth} height={starHeight} aria-hidden="true">
          <use xlinkHref={rating <= ratingValue ? '#icon-full-star' : '#icon-star'}></use>
        </svg>
      ))}

      <p className="visually-hidden">Оценка: {RATING_TITLES[ratingValue - 1]}</p>

      {extraСlass === 'product-card__rate' && (
        <p className="rate__count">
          <span className="visually-hidden">Всего оценок:</span>{reviewsCount}
        </p>
      )}
    </div>
  );
}

export default Rating;
