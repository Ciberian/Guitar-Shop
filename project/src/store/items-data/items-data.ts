import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { ItemsData } from '../../types/state.types';
import {
  getItemsAction,
  getItemAction,
  getCartItemsAction,
  changeItemAction,
  addNewItemAction,
  addNewCartItemAction,
  deleteItemAction,
  deleteCartItemAction,
  getReviewsAction,
  addNewReviewAction,
  getOrdersAction,
  getOrderAction,
  addNewOrderAction,
  deleteOrderAction,
  updateOrderAction,
} from '../api-actions';

const initialState: ItemsData = {
  items: [],
  item: null,
  cartItems: [],
  orders: [],
  order: null,
  reviews: [],
  isDataLoaded: false,
  isItemLoaded: false,
  isOrderLoaded: false,
};

export const itemsData = createSlice({
  name: NameSpace.Items,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getItemsAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(getItemsAction.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(getItemsAction.rejected, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(getItemAction.pending, (state) => {
        state.isItemLoaded = false;
      })
      .addCase(getItemAction.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isItemLoaded = true;
      })
      .addCase(getItemAction.rejected, (state) => {
        state.isItemLoaded = true;
      })
      .addCase(getCartItemsAction.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(changeItemAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addNewItemAction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addNewCartItemAction.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
      })
      .addCase(deleteItemAction.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteCartItemAction.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      })
      .addCase(getReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addNewReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(getOrdersAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(getOrdersAction.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(getOrdersAction.rejected, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(getOrderAction.pending, (state) => {
        state.isOrderLoaded = false;
      })
      .addCase(getOrderAction.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isOrderLoaded = true;
      })
      .addCase(getOrderAction.rejected, (state) => {
        state.isOrderLoaded = true;
      })
      .addCase(addNewOrderAction.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      .addCase(updateOrderAction.fulfilled, (state, action) => {
        state.orders = state.orders.filter((order) => order.id !== action.payload.id);
        state.orders.push(action.payload);
      })
      .addCase(deleteOrderAction.fulfilled, (state, action) => {
        state.orders = state.orders.filter((order) => order.id !== action.payload);
      });
  },
});
