import { useEffect, useRef, useState } from 'react';
import { GuitarType, INITIAL_ITEM_COUNT } from '../../../constants';
import { useAppDispatch } from '../../../hooks';
import { deleteCartItemAction } from '../../../store/api-actions';
import { IItem } from '../../../types/item.interface';
import CrossBtn from '../../common/cross-btn/cross-btn';

interface ICartItemProps {
  item: IItem;
  updateOrder: (item: IItem, itemsCount: number, itemsSumPrice: number) => void;
}

function CartItem({ item, updateOrder }: ICartItemProps): JSX.Element {
  const { image, name, sku, type, strings, price } = item;
  const dispatch = useAppDispatch();
  const updateOrderRef = useRef(updateOrder);
  const [itemCount, setItemCount] = useState(INITIAL_ITEM_COUNT);

  const increaseCount = () => {
    const increasedCount = itemCount + 1;
    setItemCount(increasedCount);
  };

  const decreaseCount = () => {
    const decreasedCount = itemCount - 1;
    setItemCount(decreasedCount);
  };

  useEffect(() => {
    const itemsSumPrice = price * itemCount;
    updateOrderRef.current(item, itemCount, itemsSumPrice);
  }, [item, itemCount, price]);

  const removeItem = () => {
    dispatch(deleteCartItemAction(item.id));
  };

  return (
    <div className="cart-item">
      <CrossBtn extraСlass='cart-item__close-button' crossBtnHandler={removeItem} />
      <div className="cart-item__image">
        <img
          src={image}
          width="55"
          height="130"
          alt={name}
        />
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{name}</p>
        <p className="product-info__info">Артикул: {sku}</p>
        <p className="product-info__info">{GuitarType[type]}, {strings} струнная</p>
      </div>
      <div className="cart-item__price">{price} ₽</div>
      <div className="quantity cart-item__quantity">
        <button
          className="quantity__button"
          aria-label="Уменьшить количество"
          onClick={decreaseCount}
          disabled={itemCount <= 1}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"></use>
          </svg>
        </button>
        <input
          className="quantity__input"
          type="number"
          placeholder={String(itemCount)}
          id="1-count"
          name="1-count"
          max="99"
          readOnly
        />
        <button
          className="quantity__button"
          aria-label="Увеличить количество"
          onClick={increaseCount}
          disabled={itemCount >= 99}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">{price * itemCount} ₽</div>
    </div>
  );
}

export default CartItem;
