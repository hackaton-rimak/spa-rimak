import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../../interfaces/app.interfaces";

export const appInitialState: IAppState = {
  productParam: "",
};

export const appSlice = createSlice({
  extraReducers: {},
  initialState: appInitialState,
  name: "app",
  reducers: {
    setProductParam: (state, action) => {
      state.productParam = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { setProductParam } = appSlice.actions;
