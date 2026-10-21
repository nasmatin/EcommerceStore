import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetProvince = createAsyncThunk(
  "GetProvince",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/address/Provinces");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const ProvinceSlice = createSlice({
  name: "provinces",
  initialState: {
    provinces: [],
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetProvince.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetProvince.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        state.provinces = action.payload; // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetProvince.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default ProvinceSlice.reducer;
