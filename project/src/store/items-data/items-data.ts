import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { ItemsData } from '../../types/state.types';
import {
  fetchItemsAction,
  fetchItemAction,
  fetchCartItemsAction,
  fetchChangeItemAction,
  fetchNewItemAction,
  fetchDeleteItemAction,
  fetchReviewsAction,
  fetchNewReviewAction,
  fetchOrdersAction,
  fetchOrderAction,
  fetchDeleteOrderAction,
} from '../api-actions';

const initialState: ItemsData = {
  items: [],
  item: null,
  cartItems: [],
  orders: [],
  order: null,
  reviews: null,
  isDataLoaded: false,
  isItemLoaded: false,
  isOrderLoaded: false,
};

export const itemsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItemsAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchItemsAction.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchItemsAction.rejected, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchItemAction.pending, (state) => {
        state.isItemLoaded = false;
      })
      .addCase(fetchItemAction.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isItemLoaded = true;
      })
      .addCase(fetchItemAction.rejected, (state) => {
        state.isItemLoaded = true;
      })
      .addCase(fetchCartItemsAction.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(fetchChangeItemAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchNewItemAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchDeleteItemAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchNewReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchOrdersAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchOrdersAction.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchOrdersAction.rejected, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOrderAction.pending, (state) => {
        state.isOrderLoaded = false;
      })
      .addCase(fetchOrderAction.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isOrderLoaded = true;
      })
      .addCase(fetchOrderAction.rejected, (state) => {
        state.isOrderLoaded = true;
      })
      .addCase(fetchDeleteOrderAction.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});
