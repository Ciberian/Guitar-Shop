import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortType } from '../../constants';
import { SelectedSort } from '../../types/state.types';

const initialState: SelectedSort = {
  catalogSortType: SortType.PriceToHigh,
  itemsListSortType: SortType.PriceToHigh,
  ordersSortType: SortType.PriceToHigh,
};

export const selectedSort = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    changeCatalogSortType: (state, action) => {
      state.catalogSortType = action.payload;
    },
    changeItemListSortType: (state, action) => {
      state.itemsListSortType = action.payload;
    },
    changeOrdersSortType: (state, action) => {
      state.ordersSortType = action.payload;
    },
  },
});

export const { changeCatalogSortType, changeItemListSortType, changeOrdersSortType } = selectedSort.actions;
