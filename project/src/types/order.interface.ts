import { IOrderItem } from './order-items.interface';

export interface IOrder {
  id: number;
  items: IOrderItem[];
  totalItems: number;
  totalPrice: number;
  userId: number;
  date: Date;
}
