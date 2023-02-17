import { ICartItem } from './cart-item.interface';

export interface IOrderData {
  id?: number;
  items: ICartItem[];
  totalItems: number;
  totalPrice: number;
  userId?: number;
  date?: Date;
}
