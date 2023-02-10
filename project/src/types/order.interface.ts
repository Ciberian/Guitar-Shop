import { IItem } from './item.interface';

type IOrderedItems = {
  item: IItem;
  itemsCount: number;
  itemsPrice: number;
};

export interface IOrder {
  id: number;
  items: IOrderedItems[];
  totalItems: number;
  totalPrice: number;
  date: Date;
}
