import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { itemsData } from './items-data/items-data';
import { userProcess } from './user-process/user-process';
import { errorProcess } from './error-process/error-process';

export const rootReducer = combineReducers({
  [NameSpace.Items]: itemsData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
});
