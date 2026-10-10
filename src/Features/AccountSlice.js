import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const PutAccountEdit = createAsyncThunk(
  "PutAccountEdit",
  async({id,formdata}, { rejectWithValue })=>{
    try{
   console.log("USER ID:", id);
      console.log("FORM DATA:", formdata);

      const response = await api.put("/users/edit", formdata, {
        params: {
          id: id,
        },
      });
      console.log(" PutAccountEdit  :", response.data);
      const result = response.data;

      console.log("BEFORE EDIT:", result);

      return {
        id,
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
const AccountsSlice = createSlice({
  name: "account",
  initialState: {
    accounts: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
  
      .addCase(PutAccountEdit.pending, (state) => {
        //state.status = "loading";
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(PutAccountEdit.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id, data } = action.payload;
        state.accounts[id] = data; // داده‌های آمده از سرور   
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(PutAccountEdit.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export default AccountsSlice.reducer;