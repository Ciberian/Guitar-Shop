import { NameSpace } from '../../constants';
import { State } from '../../types/state.types';
import { IItem } from '../../types/item.interface';
import { IOrder } from '../../types/order.interface';
import { IReview } from '../../types/review.interface';

export const getItems = (state: State): IItem[] => state[NameSpace.Data].items;
export const getItem = (state: State): IItem | null => state[NameSpace.Data].item;
export const getOrders = (state: State): IOrder[] => state[NameSpace.Data].orders;
export const getOrder = (state: State): IOrder | null => state[NameSpace.Data].order;
export const getReviews = (state: State): IReview[] | null => state[NameSpace.Data].reviews;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getLoadedItemStatus = (state: State): boolean => state[NameSpace.Data].isItemLoaded;
export const getLoadedOrderStatus = (state: State): boolean => state[NameSpace.Data].isOrderLoaded;
