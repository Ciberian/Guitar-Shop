import { store } from '../store/index.js';
import { AuthorizationStatus } from '../constants';
import { UserData } from './user-data.interface.js';

export type SelectedSort = {
  sortType: string;
};

export type CurrentError = {
  error: null | string;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: null | UserData;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
