import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { setError } from '../store/error-process/error-process';
import { StatusCodes } from 'http-status-codes';
import { getToken } from './token';
import { store } from '../store';
import { TIMEOUT_SHOW_ERROR } from '../constants';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'http://localhost:3000/guitar-store';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        store.dispatch(setError(error.response.data.error));
        setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
      }

      throw error;
    },
  );

  return api;
};

