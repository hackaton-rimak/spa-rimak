import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../../interfaces/app.interfaces";
import { getData, getDataInsights } from "../../thunks/app.thunk";

export const appInitialState: IAppState = {
  productParam: "",
  request: { product: "", type: "" },
  data: [],
  dataInsights: [],
  loadingData: false,
  client: "",
};

export const appSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingData = false;
      })
      .addCase(getData.pending, (state) => {
        state.loadingData = true;
      })
      .addCase(getData.rejected, (state) => {
        state.loadingData = true;
      });
    builder
      .addCase(getDataInsights.fulfilled, (state, action) => {
        state.dataInsights = action.payload;
        state.loadingData = false;
      })
      .addCase(getDataInsights.pending, (state) => {
        state.loadingData = true;
      })
      .addCase(getDataInsights.rejected, (state) => {
        state.loadingData = true;
      });
  },
  initialState: appInitialState,
  name: "app",
  reducers: {
    setProductParam: (state, action) => {
      state.productParam = action.payload;
    },
    setClient: (state, action) => {
      state.client = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { setProductParam, setClient } = appSlice.actions;
