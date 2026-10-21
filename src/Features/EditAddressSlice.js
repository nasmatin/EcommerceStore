import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const EditAddress = createAsyncThunk(
  "EditAddress",
  async ({ userId, id, formdata }, { rejectWithValue }) => {
    try {
      const response = await api.put("/address/UpdateAddress", formdata, {
        params: {
          userId,
          id,
        },
      });
      const result = response.data;

      return {
        userId,
        id,
        data: result,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const EditAddressSlice = createSlice({
  name: "editaddress",
  initialState: {
    editaddresses: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(EditAddress.pending, (state) => {
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(EditAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { userId, id, data } = action.payload;
        state.editaddresses[`${userId}_${id}`] = data;
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(EditAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default EditAddressSlice.reducer;
