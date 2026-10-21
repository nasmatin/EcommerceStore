import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetCity = createAsyncThunk(
  "GetCity",
  async (provinceId, { rejectWithValue }) => {
    try {
      const response = await api.get("/address/Cities", {
        params: {
          provinceId: provinceId,
        },
      });
      return {
        provinceId,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const CitySlice = createSlice({
  name: "city",
  initialState: {
    cities: {},
    statusbar: "idle",
    errorbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetCity.pending, (state) => {
        state.statusbar = "loading";
        state.errorbar = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetCity.fulfilled, (state, action) => {
        state.statusbar = "succeeded";
        const { provinceId, data } = action.payload;
        state.cities[provinceId] = data; // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetCity.rejected, (state, action) => {
        state.statusbar = "failed";
        state.errorbar = action.payload;
      });
  },
});
export default CitySlice.reducer;
