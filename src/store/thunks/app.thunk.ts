import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRimak } from "../../shared/interfaces/rimak.interfaces";
import axios from "axios";

export interface IRimakRequest {
  product: string;
  type: string;
}
export const getData = createAsyncThunk<IRimak[], IRimakRequest>(
  "app/getData",
  async (request: IRimakRequest) => {
    const url =
      "https://acyy35qoje.execute-api.us-east-1.amazonaws.com/dev/insights";
    const res = await axios.post(url, {
      body: request,
    });

    console.log("DATAAA", res.data);

    return res.data;
  }
);
