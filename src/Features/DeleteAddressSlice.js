import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const DeleteAddress = createAsyncThunk(
  "DeleteAddress",
  async({userId,id}, { rejectWithValue })=>{
    try{

      const response = await api.delete("/address/DeleteAddress", {
        params: {
          userId: userId,
             id: id,
        },
      });
      const result = response.data;
      return {
        userId,id,
        data: result,
      };
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const DeleteAddressSlice = createSlice({
  name: "deleteaddress",
  initialState: {
    deleteaddresses: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
  
      .addCase(DeleteAddress.pending, (state) => {
        //state.status = "loading";
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(DeleteAddress.fulfilled, (state) => {
        state.status = "succeeded";
        //const { userId,id, data } = action.payload;
        //state.deleteaddress[userId,id] = data; // داده‌های آمده از سرور   
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(DeleteAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default DeleteAddressSlice.reducer;