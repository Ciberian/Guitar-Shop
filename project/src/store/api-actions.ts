import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.types';
import { saveToken, dropToken } from '../services/token';
import { IItem } from '../types/item.interface';
import { IReview } from '../types/review.interface';
import { IAuthData } from '../types/auth-data.interface';
import { IUserData } from '../types/user-data.interface';
import { APIRoute } from '../constants';
import { IOrder } from '../types/order.interface';
import { IReviewData } from '../types/review-data.interface';

export const getItemsAction = createAsyncThunk<
  IItem[],
  undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/getItemsAction', async (_arg, { extra: api }) => {
  const { data } = await api.get<IItem[]>(APIRoute.Items);
  return data;
});

export const getItemAction = createAsyncThunk<
  IItem,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/getItemAction', async (itemId, { extra: api }) => {
  const { data } = await api.get<IItem>(`${APIRoute.Items}/${itemId}`);
  return data;
});

export const getCartItemsAction = createAsyncThunk<
  IItem[],
  undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/getCartItemsAction', async (_arg, { extra: api }) => {
  const { data } = await api.get<IItem[]>(APIRoute.Cart);
  return data;
});

export const changeItemAction = createAsyncThunk<
  IItem[],
  IItem,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/changeItemAction', async (item, { extra: api }) => {
  const { data } = await api.patch<IItem[]>(`${APIRoute.Items}/${item.id}`, item);
  return data;
});

export const addNewItemAction = createAsyncThunk<
  IItem,
  IItem, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/addNewItemAction', async (newItem, { extra: api }) => {
  const { data } = await api.post<IItem>(APIRoute.Items, newItem);
  return data;
});

export const addNewCartItemAction = createAsyncThunk<
  IItem,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/addNewCartItemAction', async (itemId, { extra: api }) => {
  const { data } = await api.post<IItem>(`${APIRoute.Cart}/${itemId}`);
  return data;
});

export const deleteItemAction = createAsyncThunk<
  number,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/deleteItemAction', async (itemId, { extra: api }) => {
  const { data } = await api.delete<number>(`${APIRoute.Items}/${itemId}`);
  return data;
});

export const deleteCartItemAction = createAsyncThunk<
  number,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/deleteCartItemAction', async (itemId, { extra: api }) => {
  const { data } = await api.delete<number>(`${APIRoute.Cart}/${itemId}`);
  return data;
});

export const getReviewsAction = createAsyncThunk<
  IReview[],
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/getReviewsAction', async (itemId, { extra: api }) => {
  const { data } = await api.get<IReview[]>(`${APIRoute.Reviews}/${itemId}`);
  return data;
});

export const addNewReviewAction = createAsyncThunk<
  IReview,
  IReviewData & {itemId: number}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/addNewReviewAction', async ({rating, advantage, disadv, comment, itemId}, { extra: api }) => {
  const { data } = await api.post<IReview>(`${APIRoute.Reviews}/${itemId}`, { rating, advantage, disadv, comment });
  return data;
});

export const getOrdersAction = createAsyncThunk<
  IOrder[],
  undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/getOrdersAction', async (_arg, { extra: api }) => {
  const { data } = await api.get<IOrder[]>(APIRoute.Orders);
  return data;
});

export const getOrderAction = createAsyncThunk<
  IOrder,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/getOrderAction', async (orderId, { extra: api }) => {
  const { data } = await api.get<IOrder>(`${APIRoute.Orders}/${orderId}`);
  return data;
});

export const deleteOrderAction = createAsyncThunk<
  number,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/deleteOrderAction', async (orderId, { extra: api }) => {
  const { data } = await api.delete<number>(`${APIRoute.Orders}/${orderId}`);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  IUserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuthAction', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  IUserData,
  IAuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/loginAction', async ({ login: email, password }, { extra: api }) => {
  const { data } = await api.post<IUserData>(APIRoute.Login, { email, password });
  saveToken(data.token);
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logoutAction', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
