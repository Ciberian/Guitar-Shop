import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { offersData } from './offers-data/offers-data';
import { selectedSort } from './selected-sort/selected-sort';
import { userProcess } from './user-process/user-process';
import { errorProcess } from './error-process/error-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Sort]: selectedSort.reducer,
  [NameSpace.Error]: errorProcess.reducer,
});

