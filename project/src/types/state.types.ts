import { store } from '../store/index.js';
import { AuthorizationStatus } from '../constants';
import { IUserData } from './user-data.interface.js';
import { IItem } from './item.interface.js';
import { IReview } from './review.interface.js';
import { IOrder } from './order.interface.js';

export type SelectedSort = {
  sortType: string;
};

export type CurrentError = {
  error: null | string;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: null | IUserData;
};

export type ItemsData = {
  items: IItem[],
  item: null | IItem,
  cartItems: IItem[],
  orders: IOrder[],
  order: null | IOrder,
  reviews: null | IReview[],
  isDataLoaded: boolean,
  isItemLoaded: boolean,
  isOrderLoaded: boolean,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
