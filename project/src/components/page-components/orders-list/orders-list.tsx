import Order from '../order/order';
import { IOrder } from '../../../types/order.interface';

interface IOrdersListProps {
  orders: IOrder[];
}

function OrdersList({ orders }: IOrdersListProps): JSX.Element {
  return (
    <ul className='orders__list'>
      {orders.map((order) => <Order key={order.id} order={order} />)}
    </ul>
  );
}

export default OrdersList;
