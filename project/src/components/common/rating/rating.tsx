import { RATINGS, RATING_TITLES } from '../../../constants';

interface IRatingProps {
  extraСlass?: string;
  ratingValue?: number;
  reviewsCount?: number;
  width?: number;
  height?: number;
  isShowRateCount?: boolean;
}

const DEFAULT_STAR_WIDTH = 11;
const DEFAULT_STAR_HEIGHT = 12;

function Rating({
  extraСlass = '',
  ratingValue = 0,
  reviewsCount = 0,
  isShowRateCount = false,
  width = DEFAULT_STAR_WIDTH,
  height = DEFAULT_STAR_HEIGHT,
}: IRatingProps): JSX.Element {

  return (
    <div className={`rate ${extraСlass}`}>
      {RATINGS.map((rating) => (
        <svg key={`key-${rating}`} width={width} height={height} aria-hidden="true">
          <use xlinkHref={rating <= ratingValue ? '#icon-full-star' : '#icon-star'}></use>
        </svg>
      ))}

      <p className="visually-hidden">Оценка: {RATING_TITLES[ratingValue - 1]}</p>

      {isShowRateCount && (
        <p className="rate__count">
          <span className="visually-hidden">Всего оценок:</span>{reviewsCount}
        </p>
      )}
    </div>
  );
}

export default Rating;
