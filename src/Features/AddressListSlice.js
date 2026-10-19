import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const  GetAddress= createAsyncThunk("GetAddress",
    async(userId,{rejectWithValue})=>{
        try{
const response=await api.get("address/UserAddress",{
    params:{
        userId:userId,
    },

});
return {
    userId,
    data:response.data,
};

    }
    catch(error)
    {
            return rejectWithValue(error.message);
  
    }
});
const AddressSlice=createSlice({
      name:"addresses",
    initialState:{
        addresses:{},
        statusbar:"idle",
        errorbar:null,
    }, 
     reducers:{},
          extraReducers: (builder) => {
            builder
              // وقتی درخواست شروع می‌شود
              .addCase(GetAddress.pending, (state) => {
                state.statusbar = "loading";
                state.errorbar = null;
              })
              // وقتی درخواست موفق می‌شود
              .addCase(GetAddress.fulfilled, (state, action) => {
                state.statusbar = "succeeded";
                const { userId, data } = action.payload;
                state.addresses[userId] = Array.isArray(data)
  ? data
  : data.addresses ?? [];; // داده‌های آمده از سرور

            })
              // وقتی درخواست شکست می‌خورد
              .addCase(GetAddress.rejected, (state, action) => {
                state.statusbar = "failed";
                state.errorbar = action.payload;
              });
          },
    });
    export default AddressSlice.reducer;
    