import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetCategory = createAsyncThunk(
  "GetCategory",
  async (parentId = 0, { rejectWithValue }) => {
    try {
      const response = await api.get("/categories/menu", {
        params: {
          parentId: parentId,
        },
      });

      return {
        parentId,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    category: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // وقتی درخواست شروع می‌شود
      .addCase(GetCategory.pending, (state) => {
        //state.status = "loading";
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(GetCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { parentId, data } = action.payload;
        state.category[parentId] = data; // داده‌های آمده از سرور
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(GetCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default MenuSlice.reducer;
