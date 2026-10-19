import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const EditAddress = createAsyncThunk(
  "EditAddress",
  async ({ userId, id, formdata }, { rejectWithValue }) => {
    try {
      console.log("EditAddress USER ID:", userId);
      console.log("EditAddress ID:", id);
      console.log("EditAddress formdata:", formdata);

      const response = await api.put("/address/UpdateAddress", formdata, {
        params: {
          userId,
          id,
        },
      });
      console.log(" EditAddress  :", response.data);
      const result = response.data;

      console.log("BEFORE EditAddress:", result);

      return {
        userId,
        id,
        data: response.data,
      };
    } catch (error) {
      console.log("ERROR EDIT:", error);
  console.log("ERROR STATUS:", error.response?.status);
  console.log("ERROR RESPONSE:", error.response?.data);
 return rejectWithValue(
    error.response?.data?.message ||
    error.message ||
    "خطای نامشخص در ویرایش آدرس",
  );    }
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
        //state.status = "loading";
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
