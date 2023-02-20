import { IItem } from './item.interface';

export interface IOrderItem {
  item: IItem;
  itemsCount: number;
  itemsPrice: number;
}
