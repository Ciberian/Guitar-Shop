import { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../../hooks';
import FormRating from '../../form-elements/form-rating/form-rating';

const MIN_REVIEW_SIMBOLS = 50;
const MAX_REVIEW_SIMBOLS = 300;

type ReviewFormProps = {
  id: string;
};

function ReviewForm({id}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setformData] = useState({
    rating: '',
    comment: '',
  });

  function isReviewLongEnough(): boolean {
    const reviewLength = formData.comment.trim().length;
    return reviewLength >= MIN_REVIEW_SIMBOLS && reviewLength <= MAX_REVIEW_SIMBOLS;
  }

  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setformData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line no-console
  console.log(formData);

  return (
    <div className="modal is-active modal--review modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
          <form className="form-review">
            <div className="form-review__wrapper">
              <h3 className="form-review__title">СURT Z30 Plus</h3>
              <div><span className="form-review__label form-review__label--required form-review__label--star">Ваша Оценка</span>
                <FormRating currentRate={formData.rating} fromRatingChangeHandler={formDataChangeHandler} />
              </div>
            </div>
            <label className="form-review__label form-review__label--required" htmlFor="advantage">Достоинства</label>
            <input className="form-review__input" id="advantage" type="text" autoComplete="off" />
            <p className="form-review__warning">Заполните поле</p>
            <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
            <input className="form-review__input" id="disadv" type="text" autoComplete="off" />
            <p className="form-review__warning">Заполните поле</p>
            <label className="form-review__label form-review__label--required form-review__label--textarea" htmlFor="comment">Комментарий</label>
            <textarea className="form-review__input form-review__input--textarea" id="comment" autoComplete="off"></textarea>
            <p className="form-review__warning">Заполните поле</p>
            <button className="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
          </form>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
