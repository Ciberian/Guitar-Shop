import Button from '../../common/button/button';
import { useAppDispatch } from '../../../hooks';
import { deleteOrderAction } from '../../../store/api-actions';
import { IOrder } from '../../../types/order.interface';
import { Link } from 'react-router-dom';

interface IOrderItemProps {
  order: IOrder;
}

function OrderItem({ order }: IOrderItemProps): JSX.Element {
  const { id, totalItems, totalPrice, date } = order;
  const formattedDate = date.toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric'});
  const dispatch = useAppDispatch();

  return (
    <li className="orders__item">
      <Link to={`/orders/order/${id}`}>
        <h3 className="orders__number">Заказ №{id}</h3>
      </Link>
      <span className="orders__items">товаров&nbsp;<b className="orders__items-qty">{totalItems}</b></span>
      <span className="orders__date">{formattedDate}</span>
      <b className="orders__sum">{totalPrice}<span className="orders__rouble">₽</span></b>
      <Button
        btnSize='button--small'
        btnType='orders__remove-button'
        btnClickHandler={() => dispatch(deleteOrderAction(id))}
      >
        Удалить
      </Button>
    </li>
  );
}

export default OrderItem;
