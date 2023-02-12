import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import CrossBtn from '../../common/cross-btn/cross-btn';

function SuccessAdd(): JSX.Element {
  const [modalActive, setModalActive] = useState(true);
  const navigate = useNavigate();

  const closeModalWindow = () => {
    setModalActive(false);
  };

  return (
    <div className={`modal modal--success modal-for-ui-kit ${modalActive ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div onClick={closeModalWindow} className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <svg className="modal__icon" width="26" height="20" aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <p className="modal__message">Товар успешно добавлен в корзину</p>
          <div className="modal__button-container modal__button-container--add">
            <button
              className="button button--small modal__button"
              onClick={() => navigate(AppRoute.Cart)}
            >
              Перейти в корзину
            </button>
            <button
              className="button button--black-border button--small modal__button modal__button--right"
              onClick={closeModalWindow}
            >
              Продолжить покупки
            </button>
          </div>
          <CrossBtn extraСlass='modal__close-btn' crossBtnHandler={closeModalWindow}/>
        </div>
      </div>
    </div>
  );
}

export default SuccessAdd;
