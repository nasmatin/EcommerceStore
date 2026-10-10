import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api.js";

export const GetProduct = createAsyncThunk(
  "GetProduct",
  async (catId , { rejectWithValue }) => {
    try {
      const response = await api.get("/products/bycategory", {
        params: {
          catId: catId,
        },
      });
      console.log("GetProduct API:", response.data);
      console.log("CATID API:", catId);
      return {
        catId,
        data: response.data,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const ProductSlice=createSlice({
    name:"product",
    initialState:{
        products:{},
        statusbar:"idle",
        errorbar:null,
    },
    reducers:{},
      extraReducers: (builder) => {
        builder
          // وقتی درخواست شروع می‌شود
          .addCase(GetProduct.pending, (state) => {
            state.statusbar = "loading";
            state.errorbar = null;
              console.log("CATID API PEND:", "pending");
          })
          // وقتی درخواست موفق می‌شود
          .addCase(GetProduct.fulfilled, (state, action) => {
            state.statusbar = "succeeded";
            const { catId, data } = action.payload;
            state.products[catId] = data.products; // داده‌های آمده از سرور
            console.log("CATID API SUCCEDED:", data.products);
          })
          // وقتی درخواست شکست می‌خورد
          .addCase(GetProduct.rejected, (state, action) => {
            state.statusbar = "failed";
            state.errorbar = action.payload;
                     console.log("CATID API REGECTED:", "rejected");
          });
      },
});
export default ProductSlice.reducer;
