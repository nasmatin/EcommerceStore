import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetSearchItems = createAsyncThunk(
  "GetSearchItems",
  async (q, { rejectWithValue }) => {
    try {
      const response = await api.get("/products/search", {
        params: {
          q: q,
        },
      });

      return {
        q,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchitems: {},
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetSearchItems.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetSearchItems.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        const { q, data } = action.payload;
        state.searchitems[q] = data; // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetSearchItems.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default SearchSlice.reducer;
