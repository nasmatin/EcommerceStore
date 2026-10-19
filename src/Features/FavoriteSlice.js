import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";

const savedFavorite = JSON.parse(localStorage.getItem("like") || "null");

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
    status: "idle",
    error:"",
  },
  reducers: {
    like: (state, action) => {
      const likeitem = action.payload;
      state.items.push({
        id: likeitem.id,
        title: likeitem.title,
        price: likeitem.price,
        image: likeitem.image,
        link: likeitem.link,
      });
    },
    dislike: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;
    },
  },
  extraReducers:(builder)=>{
builder
      // وقتی درخواست شروع می‌شود
      .addCase(savedFavorite.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // وقتی درخواست موفق می‌شود
      .addCase(savedFavorite.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.id = action.payload.user.id;
        state.name = action.payload.user.name;
        state.familyname = action.payload.user.familyname;
        state.username = action.payload.user.username;
        state.mobile = action.payload.user.mobile;
        state.token = action.payload.user.token;
        localStorage.setItem("like", JSON.stringify(action.payload.user));

        state.error = null;
        console.log(" savedFavorite fulfilled:", state.name);
        console.log(" savedFavorite fulfilled:", state.familyname);
      })
      // وقتی درخواست شکست می‌خورد
      .addCase(savedFavorite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});
export const { like,dislike} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;