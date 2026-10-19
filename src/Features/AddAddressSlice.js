import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const PostAddress = createAsyncThunk(
  "PostAddress",
  async({userId,formdata}, { rejectWithValue })=>{
    try{


      const response = await api.post("/address/CreateAddress", formdata, {
        params: {
          userId: userId,
        },
      });
      const result = response.data;

      return {
        userId,
        data: result,
      };
    }
  catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const AddAddressSlice = createSlice({
  name: "addaddress",
  initialState: {
    addaddresses: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
  
      .addCase(PostAddress.pending, (state) => {
        //state.status = "loading";
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(PostAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { userId, data } = action.payload;
        state.addaddresses[userId] = data; // داده‌های آمده از سرور   
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(PostAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default AddAddressSlice.reducer;