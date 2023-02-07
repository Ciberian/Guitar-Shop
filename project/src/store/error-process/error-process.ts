import { createSlice } from '@reduxjs/toolkit';
import { CurrentError } from '../../types/state.types';
import { NameSpace } from '../../constants';

const initialState: CurrentError = {
  error: null,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorProcess.actions;
