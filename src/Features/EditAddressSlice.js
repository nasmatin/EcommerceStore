import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const EditAddress = createAsyncThunk(
  "EditAddress",
  async({userId,id}, { rejectWithValue })=>{
    try{
   console.log("EditAddress USER ID:", userId,id);

      const response = await api.put("/address/UpdateAddress", {
        params: {
          userId: userId,
             id: id,
        },
      });
      console.log(" EditAddress  :", response.data);
      const result = response.data;

      console.log("BEFORE EditAddress:", result);

      return {
        userId,id,
        data: response.data,
      };
    }
    catch(error)
    {
            console.log("ERROR EDIT:", error);
      console.log("ERROR RESPONSE EDIT:", error.response?.data);
      return rejectWithValue(error.message);
    }
  }
);
const EditAddressSlice = createSlice({
  name: "editaddress",
  initialState: {
    deleteaddresses: {},
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
        const { userId,id, data } = action.payload;
        state.editaddress[userId,id] = data; // داده‌های آمده از سرور   
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(EditAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default EditAddressSlice.reducer;