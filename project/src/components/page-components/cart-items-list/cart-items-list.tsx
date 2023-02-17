import CartItem from '../cart-item/cart-item';
import Button from '../../common/button/button';
import { useState } from 'react';
import { IItem } from '../../../types/item.interface';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRoute, AuthorizationStatus } from '../../../constants';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { IOrderData } from '../../../types/order-data.interface';
import { addNewOrderAction } from '../../../store/api-actions';

interface ICatalogItemProps {
  items: IItem[];
}

function CartItemsList({ items }: ICatalogItemProps): JSX.Element {
  const prices = new Map(items.map((item) => [item.id, item.price]));
  const initialTotalPrice = Array.from(prices.values()).reduce((total, price) => total + price, 0);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const updateTotalPrice = (itemId: number, itemsCount: number, itemsSumPrice: number) => {
    prices.set(itemId, itemsSumPrice);
    const updatedTotalPrice = Array.from(prices.values()).reduce((total, price) => total + price, 0);
    setTotalPrice(updatedTotalPrice);
  };

  const order: IOrderData = {
    items: [],
    totalItems: 0,
    totalPrice: 0
  };

  return (
    <div className='cart'>
      {items.map((item) => <CartItem key={item.id} item={item} updateTotalPrice={updateTotalPrice} />)}
      <div className="cart__footer">
        <div className="cart__total-info">
          <p className="cart__total-item">
            <span className="cart__total-value-name">Всего:</span>
            <span className="cart__total-value">{totalPrice} ₽</span>
          </p>
          <p className="cart__total-item">
            <span className="cart__total-value-name">К оплате:</span>
            <span className="cart__total-value cart__total-value--payment">{totalPrice} ₽</span>
          </p>
          <Button
            btnStyle='button--red'
            btnType='cart__order-button'
            btnClickHandler={() => {
              if (isUserAuthorized) {
                dispatch(addNewOrderAction(order));
              } else {
                navigate(AppRoute.Login);
              }
            }}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItemsList;
