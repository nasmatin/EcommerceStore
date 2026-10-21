import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetPayment = createAsyncThunk(
  "GetPayment",
  async (paymentdata, { rejectWithValue }) => {
    try {
      const response = await api.post("/orders/add", paymentdata);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data ?? error.message);
    }
  }
);
const PaymentSlice = createSlice({
  name: "payment",
  initialState: {
    payments: null,
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetPayment.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetPayment.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        state.payments = action.payload; // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetPayment.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default PaymentSlice.reducer;
