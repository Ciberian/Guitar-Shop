import { GuitarType } from '../../../constants';
import { IItem } from '../../../types/item.interface';

interface ICartAddProps {
  modalTitle: string;
  item: IItem;
}

function CartAdd({modalTitle, item}: ICartAddProps): JSX.Element {
  const {image, name, code, type, strings, price} = item;
  const [imgName, imgExtention] = image.split('.');

  return (
    <div className="modal is-active modal-for-ui-kit">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <h2 className="modal__header title title--medium">{modalTitle}</h2>
          <div className="modal__info">
            <img
              className="modal__img"
              src={image}
              srcSet={`${imgName}@2x.${imgExtention} 2x`}
              width="67"
              height="137"
              alt={name}
            />
            <div className="modal__info-wrapper">
              <h3 className="modal__product-name title title--little title--uppercase">{name}</h3>
              <p className="modal__product-params modal__product-params--margin-11">Артикул: {code}</p>
              <p className="modal__product-params">{GuitarType[type]}, {strings} струнная</p>
              <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">{price} ₽</span></p>
            </div>
          </div>
          <div className="modal__button-container">
            <button className="button button--red button--big modal__button modal__button--add">Добавить в корзину</button>
          </div>
          <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartAdd;
