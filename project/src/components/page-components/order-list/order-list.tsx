import OrderListItem from '../order-list-item/order-list-item';
import { IOrder } from '../../../types/order.interface';
import { useAppDispatch } from '../../../hooks';
import { IOrderItem } from '../../../types/order-items.interface';
import { updateOrderAction } from '../../../store/api-actions';

interface IOrdersListProps {
  order: IOrder;
}

function OrderList({ order }: IOrdersListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const updateOrder = (orderItem: IOrderItem) => {
    const newOrderItemList = order.items.filter((item) => item.item.id !== orderItem.item.id);
    const newTotalPrice = order.totalPrice - orderItem.itemsPrice;
    const newTotalItems = order.totalItems - orderItem.itemsCount;

    dispatch(updateOrderAction({...order, items: newOrderItemList, totalPrice: newTotalPrice, totalItems: newTotalItems}));
  };

  return (
    <ul className='order__list order-list'>
      {order.items.map((orderItem) => <OrderListItem key={orderItem.item.id} orderItem={orderItem} updateOrder={updateOrder} />)}
    </ul>
  );
}

export default OrderList;
