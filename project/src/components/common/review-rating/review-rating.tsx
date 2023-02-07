const RATING_TITLE: string[] = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

type ReviewRatingProps = {
  starNumber: number;
  rating: string;
  ratingChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

function ReviewRating(props: ReviewRatingProps):JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={props.starNumber} id={`${props.starNumber}-stars`} type="radio" onChange={props.ratingChangeHandler} checked={Number(props.rating) === props.starNumber} />

      <label htmlFor={`${props.starNumber}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLE[props.starNumber - 1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRating;
