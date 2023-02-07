import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortType } from '../../constants';
import { SelectedSort } from '../../types/state.types';

const initialState: SelectedSort = {
  sortType: SortType.Popular,
};

export const selectedSort = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { changeSortType } = selectedSort.actions;
