import { IItem } from './item.interface';

export interface ICartItem {
  item: IItem;
  itemsCount: number;
  itemsSumPrice: number;
}
