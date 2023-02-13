import React from 'react';
import { MAX_REVIEW_RATING, MIN_REVIEW_RATING, RATING_TITLES } from '../../../constants';

interface IFormRatingProps {
  currentRate: string;
  fromRatingChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormRating({currentRate, fromRatingChangeHandler}: IFormRatingProps):JSX.Element {
  const rate: JSX.Element[] = [];

  for (let i = MAX_REVIEW_RATING; i >= MIN_REVIEW_RATING; i--) {
    rate.push(
      <React.Fragment key={i}>
        <input
          className="visually-hidden"
          id={`star-${i}`}
          name="rating" type="radio"
          value={i}
          onChange={fromRatingChangeHandler}
        />
        <label
          className="rate__label"
          htmlFor={`star-${i}`}
          title={RATING_TITLES[i]}
        >
        </label>
      </React.Fragment>
    );
  }

  return (
    <div className='rate rate--reverse'>
      {rate}
      {!currentRate && <p className="rate__message">Поставьте оценку</p>}
    </div>
  );
}

export default FormRating;
