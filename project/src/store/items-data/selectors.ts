import { NameSpace } from '../../constants';
import { State } from '../../types/state.types';
import { IItem } from '../../types/item.interface';
import { IOrder } from '../../types/order.interface';
import { IReview } from '../../types/review.interface';

export const getItems = (state: State): IItem[] => state[NameSpace.Items].items;
export const getItem = (state: State): IItem | null => state[NameSpace.Items].item;
export const getCartItems = (state: State): IItem[] => state[NameSpace.Items].cartItems;
export const getOrders = (state: State): IOrder[] => state[NameSpace.Items].orders;
export const getOrder = (state: State): IOrder | null => state[NameSpace.Items].order;
export const getReviews = (state: State): IReview[] | null => state[NameSpace.Items].reviews;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Items].isDataLoaded;
export const getLoadedItemStatus = (state: State): boolean => state[NameSpace.Items].isItemLoaded;
export const getLoadedOrderStatus = (state: State): boolean => state[NameSpace.Items].isOrderLoaded;
