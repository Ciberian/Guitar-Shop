import { useState } from 'react';
import { GuitarType } from '../../../constants';
import { IItem } from '../../../types/item.interface';
import CrossBtn from '../../common/cross-btn/cross-btn';

interface ICartDeleteProps {
  item: IItem;
  cartDeleteHandler: (item: IItem) => void;
}

function CartDelete({ item, cartDeleteHandler }: ICartDeleteProps): JSX.Element {
  const [modalActive, setModalActive] = useState(true);
  const { image, name, sku, type, strings, price } = item;

  const closeModalWindow = () => {
    setModalActive(false);
  };

  const deleteBtnClickHandler = () => {
    setModalActive(false);
    cartDeleteHandler(item);
  };

  return (
    <div className={`modal modal-for-ui-kit ${modalActive ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div onClick={closeModalWindow} className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <h2 className="modal__header title title--medium title--red">Удалить этот товар?</h2>
          <div className="modal__info">
            <img
              className="modal__img"
              src={image}
              width="67"
              height="137"
              alt={name}
            />
            <div className="modal__info-wrapper">
              <h3 className="modal__product-name title title--little title--uppercase">{name}</h3>
              <p className="modal__product-params modal__product-params--margin-11">Артикул: {sku}</p>
              <p className="modal__product-params">
                {GuitarType[type]}, {strings} струнная
              </p>
              <p className="modal__price-wrapper">
                <span className="modal__price">Цена:</span>
                <span className="modal__price">{price} ₽</span>
              </p>
            </div>
          </div>
          <div className="modal__button-container">
            <button
              className="button button--small modal__button"
              onClick={deleteBtnClickHandler}
            >
              Удалить товар
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

export default CartDelete;
