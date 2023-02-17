import CartItem from '../cart-item/cart-item';
import Button from '../../common/button/button';
import { useState } from 'react';
import { IItem } from '../../../types/item.interface';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRoute, AuthorizationStatus, INITIAL_ITEM_COUNT } from '../../../constants';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { addNewOrderAction } from '../../../store/api-actions';

interface ICatalogItemProps {
  items: IItem[];
}

function CartItemsList({ items }: ICatalogItemProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isUserAuthorized = authorizationStatus !== AuthorizationStatus.Auth;

  const cartItems = new Map(items.map((item) => [item.id, {item, itemsCount: INITIAL_ITEM_COUNT, itemsSumPrice: item.price}]));
  const initialCartItems = [...cartItems.values()];
  const initialTotalItems = initialCartItems.reduce((total, cartItem) => total + cartItem.itemsCount, 0);
  const initialTotalPrice = initialCartItems.reduce((total, cartItem) => total + cartItem.itemsSumPrice, 0);
  const initialOrder = {
    items: initialCartItems,
    totalItems: initialTotalItems,
    totalPrice: initialTotalPrice,
  };

  const [order, setOrder] = useState(initialOrder);

  const updateOrder = (item: IItem, itemsCount: number, itemsSumPrice: number) => {
    cartItems.set(item.id, { item, itemsCount, itemsSumPrice });
    const updatedCartItems = [...cartItems.values()];
    const updatedTotalItems = updatedCartItems.reduce((total, cartItem) => total + cartItem.itemsCount, 0);
    const updatedTotalPrice = updatedCartItems.reduce((total, cartItem) => total + cartItem.itemsSumPrice, 0);
    const updatedOrder = {
      items: updatedCartItems,
      totalItems: updatedTotalItems,
      totalPrice: updatedTotalPrice,
    };

    setOrder(updatedOrder);
  };

  return (
    <div className='cart'>
      {items.map((item) => <CartItem key={item.id} item={item} updateOrder={updateOrder} />)}
      <div className="cart__footer">
        <div className="cart__total-info">
          <p className="cart__total-item">
            <span className="cart__total-value-name">Всего:</span>
            <span className="cart__total-value">{order.totalPrice} ₽</span>
          </p>
          <p className="cart__total-item">
            <span className="cart__total-value-name">К оплате:</span>
            <span className="cart__total-value cart__total-value--payment">{order.totalPrice} ₽</span>
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
