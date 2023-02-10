import { AuthorizationStatus, NameSpace } from '../../constants';
import { IUserData } from '../../types/user-data.interface';
import { State } from '../../types/state.types';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): IUserData | null => state[NameSpace.User].userInfo;
