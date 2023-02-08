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

export const fetchItemsAction = createAsyncThunk<
  IItem[],
  undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/loadAll', async (_arg, { extra: api }) => {
  const { data } = await api.get<IItem[]>(APIRoute.Items);
  return data;
});

export const fetchItemAction = createAsyncThunk<
  IItem,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/loadOne', async (itemId, { extra: api }) => {
  const { data } = await api.get<IItem>(`${APIRoute.Items}/${itemId}`);
  return data;
});

export const fetchCartItemsAction = createAsyncThunk<
  IItem[],
  undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/loadCart', async (_arg, { extra: api }) => {
  const { data } = await api.get<IItem[]>(APIRoute.Cart);
  return data;
});

export const fetchChangeItemAction = createAsyncThunk<
  IItem[],
  IItem,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/changeOne', async (item, { extra: api }) => {
  const { data } = await api.patch<IItem[]>(`${APIRoute.Items}/${item.id}`);
  return data;
});

export const fetchNewItemAction = createAsyncThunk<
  IItem[],
  IItem, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/addNew', async (item, { extra: api }) => {
  const { data } = await api.post<IItem[]>(APIRoute.Items, item);
  return data;
});

export const fetchDeleteItemAction = createAsyncThunk<
  IItem[],
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('items/deleteOne', async (itemId, { extra: api }) => {
  const { data } = await api.delete<IItem[]>(`${APIRoute.Items}/${itemId}`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  IReview[],
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('reviews/loadAll', async (itemId, { extra: api }) => {
  const { data } = await api.get<IReview[]>(`${APIRoute.Reviews}/${itemId}`);
  return data;
});

export const fetchNewReviewAction = createAsyncThunk<
  IReview[],
  IReview & {itemId: number}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('reviews/addNew', async ({rating, advantages, disadvantages, comment, itemId}, { extra: api }) => {
  const { data } = await api.post<IReview[]>(`${APIRoute.Reviews}/${itemId}`, { rating, advantages, disadvantages, comment });
  return data;
});

export const fetchOrdersAction = createAsyncThunk<
  IOrder[],
  undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('orders/loadAll', async (_arg, { extra: api }) => {
  const { data } = await api.get<IOrder[]>(APIRoute.Orders);
  return data;
});

export const fetchOrderAction = createAsyncThunk<
  IOrder,
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('orders/loadOne', async (orderId, { extra: api }) => {
  const { data } = await api.get<IOrder>(`${APIRoute.Orders}/${orderId}`);
  return data;
});

export const fetchDeleteOrderAction = createAsyncThunk<
  IOrder[],
  number, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('orders/deleteOne', async (orderId, { extra: api }) => {
  const { data } = await api.delete<IOrder[]>(`${APIRoute.Orders}/${orderId}`);
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
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
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
>('user/login', async ({ login: email, password }, { extra: api }) => {
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
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
