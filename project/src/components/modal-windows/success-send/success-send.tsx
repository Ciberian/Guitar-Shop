import { useState } from 'react';
import CrossBtn from '../../common/cross-btn/cross-btn';

function SuccessSend(): JSX.Element {
  const [modalActive, setModalActive] = useState(true);

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
          <p className="modal__message">Спасибо за ваш заказ!</p>
          <div className="modal__button-container modal__button-container--send">
            <button
              className="button button--small modal__button modal__button--send"
              onClick={closeModalWindow}
            >
              К покупкам!
            </button>
          </div>
          <CrossBtn extraСlass='modal__close-btn' crossBtnHandler={closeModalWindow}/>
        </div>
      </div>
    </div>
  );
}

export default SuccessSend;
