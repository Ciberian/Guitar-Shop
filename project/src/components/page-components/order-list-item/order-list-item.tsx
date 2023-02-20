import CrossBtn from '../../common/cross-btn/cross-btn';
import { IOrderItem } from '../../../types/order-items.interface';
import { GuitarType } from '../../../constants';

interface IOrderListItemProps {
  orderItem: IOrderItem;
  updateOrder: (orderItem: IOrderItem) => void;
}

function OrderListItem({ orderItem, updateOrder }: IOrderListItemProps): JSX.Element {
  const { image, name, sku, type, strings } = orderItem.item;

  return (
    <li className="order-list__item">
      <div className="order-list__data">
        <img
          src={image}
          width="60"
          height="130"
          alt="Картинка гитары"
        />
        <div className="order-list__container">
          <p className="order-list__name">{name}</p>
          <p className="order-list__lot">Артикул: {sku}</p>
          <p className="order-list__parameters">{GuitarType[type]}, {strings} струнная</p>
        </div>
      </div><span className="order-list__quantity">{orderItem.itemsCount}</span><span className="order-list__price">{orderItem.itemsPrice} ₽</span>
      <CrossBtn extraСlass='order-list__button' crossBtnHandler={() => updateOrder(orderItem)}/>
    </li>
  );
}

export default OrderListItem;
