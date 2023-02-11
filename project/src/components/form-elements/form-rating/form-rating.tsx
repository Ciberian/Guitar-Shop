import { MAX_REVIEW_RATING, MIN_REVIEW_RATING, RATING_TITLES } from '../../../constants';

interface IFormRatingProps {
  extraClass?: string;
  ratingChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormRating({extraClass = '', ratingChangeHandler}: IFormRatingProps):JSX.Element {
  const rating: JSX.Element[] = [];

  for (let i = MAX_REVIEW_RATING; i >= MIN_REVIEW_RATING; i--) {
    rating.push(
      <>
        <input
          className="visually-hidden"
          id={`star-${i}`}
          name="rate" type="radio"
          value={i}
          onChange={ratingChangeHandler}
        />
        <label
          className="rate__label"
          htmlFor={`star-${i}`}
          title={RATING_TITLES[i]}
        >
        </label>
      </>
    );
  }

  return (
    <div className={`rate rate--reverse ${extraClass}`}>
      {rating}
      <p className="rate__message">Поставьте оценку</p>
    </div>
  );
}

export default FormRating;
