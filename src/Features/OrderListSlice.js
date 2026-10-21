import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const GetOrders = createAsyncThunk(
  "GetOrders",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.get("/orders/ordersclient", {
        params: {
          userId: userId,
        },
      });
      return {
        userId,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const OrderListSlice = createSlice({
  name: "order",
  initialState: {
    orders: {},
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetOrders.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetOrders.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        const { userId, data } = action.payload;
        state.orders[userId] = Array.isArray(data) ? data : (data.orders ?? []); // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetOrders.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default OrderListSlice.reducer;
