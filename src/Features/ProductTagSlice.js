import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetProductTag = createAsyncThunk(
  "GetProductTag",
  async ({tag=""}, { rejectWithValue }) => {
    try {
      const response = await api.get("/products/bytag", {
        params: {
          tag: tag
        },
      });
      console.log("API DATA:", response.data);
      return {
        tag,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const ProductTagSlice = createSlice({
  name: "producttag",
  initialState: {
    productstags: {},
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetProductTag.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetProductTag.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        const { tag, data } = action.payload;
          console.log("FULFILLED DATA:", data);

        state.productstags[tag] = data.productstags; // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetProductTag.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default ProductTagSlice.reducer;
