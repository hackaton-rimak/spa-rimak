import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../../interfaces/app.interfaces";

export const appInitialState: IAppState = {
  productParam: "",
  request: { product: "", type: "" },
  data: [
    {
      _id: {
        day: 1,
        month: 6,
        year: 2023,
        product: "Cajita",
      },
      sentiments: [
        {
          sentiment: "POSITIVE",
          count: 10,
        },
        {
          sentiment: "NEGATIVE",
          count: 13,
        },
        {
          sentiment: "NEUTRAL",
          count: 1,
        },
        {
          sentiment: "MIXED",
          count: 10,
        },
      ],
    },
    {
      _id: {
        day: 2,
        month: 7,
        year: 2023,
        product: "Cajita",
      },
      sentiments: [
        {
          sentiment: "POSITIVE",
          count: 10,
        },
        {
          sentiment: "NEGATIVE",
          count: 11,
        },
        {
          sentiment: "NEUTRAL",
          count: 6,
        },
        {
          sentiment: "MIXED",
          count: 3,
        },
      ],
    },
    {
      _id: {
        day: 2,
        month: 8,
        year: 2023,
        product: "Cajita",
      },
      sentiments: [
        {
          sentiment: "POSITIVE",
          count: 10,
        },
        {
          sentiment: "NEGATIVE",
          count: 12,
        },
        {
          sentiment: "NEUTRAL",
          count: 30,
        },
      ],
    },
  ],
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
