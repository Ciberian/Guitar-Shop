import CrossBtn from '../../common/cross-btn/cross-btn';
import FormRating from '../../form-elements/form-rating/form-rating';
import { useAppDispatch } from '../../../hooks';
import { useState, ChangeEvent, FormEvent } from 'react';
import { fetchNewReviewAction } from '../../../store/api-actions';
import {
  DEFAULT_REVIEW_FORM_STATE,
  MAX_ADV_DISADV_LENGTH,
  MAX_COMMENT_LENGTH,
  MIN_ADV_DISADV_LENGTH,
  MIN_COMMENT_LENGTH,
  TEXT_FIELD_ERROR_MESSAGE
} from '../../../constants';
import './review-form.css';

type ReviewFormProps = {
  itemId: number;
  itemName: string;
};

function ReviewForm({itemId, itemName}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [modalActive, setModalActive] = useState(true);
  const [formData, setFormData] = useState(DEFAULT_REVIEW_FORM_STATE);

  const closeModalWindow = () => {
    setModalActive(false);
  };

  const formDataChangeHandler = ({target}: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = target;
    const newFormData = {...formData, [name]: value};
    setFormData(newFormData);
  };

  const reviewFormSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchNewReviewAction({...formData, itemId: itemId}));
  };

  const getReviewWarningMessage = (textLength: number, isComment?: boolean) => {
    if (!textLength) {
      return TEXT_FIELD_ERROR_MESSAGE.EmptyField;
    }

    if (isComment) {
      if (textLength < MIN_COMMENT_LENGTH) {
        return TEXT_FIELD_ERROR_MESSAGE.МinCharactersForComment;
      }
      if (textLength === MAX_COMMENT_LENGTH) {
        return TEXT_FIELD_ERROR_MESSAGE.МaxCharactersForComment;
      }
      return '';
    }

    if (textLength < MIN_ADV_DISADV_LENGTH) {
      return TEXT_FIELD_ERROR_MESSAGE.МinCharacters;
    }
    if (textLength === MAX_ADV_DISADV_LENGTH) {
      return TEXT_FIELD_ERROR_MESSAGE.МaxCharacters;
    }
    return '';
  };

  const disableSubmitBtn = (): boolean | undefined => {
    if (formData.advantage.length < MIN_ADV_DISADV_LENGTH ||
        formData.advantage.length > MAX_ADV_DISADV_LENGTH ||
        formData.disadv.length < MIN_ADV_DISADV_LENGTH ||
        formData.disadv.length > MAX_ADV_DISADV_LENGTH ||
        formData.comment.length < MIN_COMMENT_LENGTH ||
        formData.comment.length > MAX_COMMENT_LENGTH ||
        formData.rating === 0
    ) {
      return true;
    }
  };

  return (
    <div className={`modal modal--review modal-for-ui-kit ${modalActive ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div onClick={closeModalWindow} className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
          <form
            className="form-review"
            onSubmit={reviewFormSubmitHandler}
          >
            <div className="form-review__wrapper">
              <h3 className="form-review__title">{itemName}</h3>
              <div>
                <span className="form-review__label form-review__label--required form-review__label--star">Ваша Оценка</span>
                <FormRating currentRate={formData.rating} fromRatingChangeHandler={formDataChangeHandler} />
              </div>
            </div>
            <label className="form-review__label form-review__label--required" htmlFor="advantage">Достоинства</label>
            <input
              className="form-review__input"
              id="advantage"
              name="advantage"
              type="text"
              autoComplete="off"
              minLength={MIN_ADV_DISADV_LENGTH}
              maxLength={MAX_ADV_DISADV_LENGTH}
              onChange={formDataChangeHandler}
            />
            <p className="form-review__warning"> {getReviewWarningMessage(formData.advantage.length)}</p>
            <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
            <input
              className="form-review__input"
              id="disadv"
              name="disadv"
              type="text"
              autoComplete="off"
              minLength={MIN_ADV_DISADV_LENGTH}
              maxLength={MAX_ADV_DISADV_LENGTH}
              onChange={formDataChangeHandler}
            />
            <p className="form-review__warning"> {getReviewWarningMessage(formData.disadv.length)}</p>
            <label className="form-review__label form-review__label--required form-review__label--textarea" htmlFor="comment">Комментарий</label>
            <textarea
              className="form-review__input form-review__input--textarea"
              id="comment"
              name="comment"
              autoComplete="off"
              minLength={MIN_COMMENT_LENGTH}
              maxLength={MAX_COMMENT_LENGTH}
              onChange={formDataChangeHandler}
            >
            </textarea>
            <p className="form-review__warning"> {getReviewWarningMessage(formData.comment.length, true)}</p>
            <button
              className="button button--medium-20 form-review__button"
              type="submit"
              disabled={disableSubmitBtn()}
            >
              Отправить отзыв
            </button>
          </form>
          <CrossBtn extraСlass='modal__close-btn' crossBtnHandler={closeModalWindow}/>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
