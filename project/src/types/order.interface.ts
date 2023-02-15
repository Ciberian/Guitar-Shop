import { IItem } from './item.interface';

type Items = {
  item: IItem;
  itemsCount: number;
  itemsPrice: number;
};

export interface IOrder {
  id: number;
  items: Items[];
  totalItems: number;
  totalPrice: number;
  userId: number;
  date: Date;
}
