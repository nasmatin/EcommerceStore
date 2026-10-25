import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetProductDetail = createAsyncThunk(
  "GetProductDetail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get("/products/productdetail", {
        params: {
          id: id,
        },
      });

      return {
        id,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const ProductDetailSlice = createSlice({
  name: "productdetail",
  initialState: {
    productdetails: {},
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetProductDetail.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetProductDetail.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        const { id, data } = action.payload;
        state.productdetails[id] = data.product; // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetProductDetail.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default ProductDetailSlice.reducer;
