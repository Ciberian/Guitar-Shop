import { createSlice } from '@reduxjs/toolkit';
import { SelectedPoint } from '../../types/state.types';
import { NameSpace } from '../../constants';

const initialState: SelectedPoint = {
  point: null,
};

export const selectedPoint = createSlice({
  name: NameSpace.Point,
  initialState,
  reducers: {
    setPoint: (state, action) => {
      state.point = action.payload;
    },
  },
});

export const { setPoint } = selectedPoint.actions;
