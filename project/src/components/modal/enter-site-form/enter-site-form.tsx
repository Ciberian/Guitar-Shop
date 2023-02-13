import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import CrossBtn from '../../common/cross-btn/cross-btn';

function EnterSiteForm(): JSX.Element {
  const [modalActive, setModalActive] = useState(true);

  const closeModalWindow = () => {
    setModalActive(false);
  };

  return (
    <div className={`modal modal--enter modal-for-ui-kit ${modalActive ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div onClick={closeModalWindow} className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <div className="modal-enter">
            <h2 className="modal-enter__title">Для выполнения данного действия необходимо войти в&nbsp;систему</h2>
            <Link className="button button--big modal-enter__link" to={AppRoute.Login}>Войти</Link>
            <p className="modal-enter__text">Если у вас ещё нет аккаунта, необходимо <br />
              <Link to={AppRoute.Register}>Зарегистрироваться</Link>
            </p>
          </div>
          <CrossBtn extraСlass='modal__close-btn' crossBtnHandler={closeModalWindow}/>
        </div>
      </div>
    </div>
  );
}

export default EnterSiteForm;
