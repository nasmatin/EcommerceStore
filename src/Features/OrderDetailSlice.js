import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetOrderDetail = createAsyncThunk(
  "GetOrderDetail",
  async ({ userId, orderId }, { rejectWithValue }) => {
    try {
      const response = await api.get("/orders/ordersdetail", {
        params: {
          userId,
          orderId,
        },
      });
      return {
        userId,
        orderId,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const OrderDetailSlice = createSlice({
  name: "orderdetail",
  initialState: {
    orderdetails: {},
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetOrderDetail.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetOrderDetail.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        const { userId, orderId, data } = action.payload;
        state.orderdetails[`${userId}_${orderId}`] = data;
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetOrderDetail.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default OrderDetailSlice.reducer;
