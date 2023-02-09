import { AuthorizationStatus, NameSpace } from '../../constants';
import { IItem } from '../../types/item.interface';
import { State } from '../../types/state.types';
import { IUserData } from '../../types/user-data.interface';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): IUserData | null => state[NameSpace.User].userInfo;
export const getCartItems = (state: State): IItem[] => state[NameSpace.Data].cartItems;
