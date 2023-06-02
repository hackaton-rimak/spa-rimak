import { createAsyncThunk } from "@reduxjs/toolkit";
import { IInsights, IRimak } from "../../shared/interfaces/rimak.interfaces";
import axios from "axios";

export interface IRimakRequest {
  product: string;
  type?: string;
  client?: string;
}
export const getData = createAsyncThunk<IRimak[], IRimakRequest>(
  "app/getData",
  async (request: IRimakRequest) => {
    const url =
      "https://acyy35qoje.execute-api.us-east-1.amazonaws.com/dev/insights";
    const res = await axios.post(url, request);

    return res.data.data;
  }
);

export const getDataInsights = createAsyncThunk<IInsights[], IRimakRequest>(
  "app/getDataInsights",
  async (request: IRimakRequest) => {
    const url =
      "https://acyy35qoje.execute-api.us-east-1.amazonaws.com/dev/insights";
    const res = await axios.post(url, request);

    return res.data.data;
  }
);
