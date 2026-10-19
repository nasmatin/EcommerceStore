import { createSlice } from "@reduxjs/toolkit";

const savedFavorite = JSON.parse(localStorage.getItem("like") || "[]");

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: Array.isArray(savedFavorite)
  ? savedFavorite
  : [],
    status: "idle",
    error: "",
  },
  reducers: {
    like: (state, action) => {
      const likeitem = action.payload;
      console.log("=== داخل reducer لایک ===");
  console.log("payload کامل:", likeitem);
  console.log("title که می‌خواد ذخیره بشه:", likeitem.title);
      // جلوگیری از ثبت لایک تکراری
      const exists = state.items.some((item) => item.id === likeitem.id);

      if (exists) return;

      state.items.push({
        id: likeitem.id,
        title: likeitem.title,
        price: likeitem.price,
        image: likeitem.image,
        link: likeitem.link,
      });
      localStorage.setItem("like", JSON.stringify(state.items));
    },
    dislike: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("like", JSON.stringify(state.items));
      console.log("بعد از ذخیره در state:", state.items);
    },
  },
  //   extraReducers:(builder)=>{
  // builder
  //       // وقتی درخواست شروع می‌شود
  //       .addCase(savedFavorite.pending, (state) => {
  //         state.status = "loading";
  //         state.error = null;
  //       })
  //       // وقتی درخواست موفق می‌شود
  //       .addCase(savedFavorite.fulfilled, (state, action) => {
  //         state.status = "succeeded";
  //         state.id = action.payload.user.id;
  //         state.title = action.payload.user.title;
  //         state.image = action.payload.user.image;
  //         state.price = action.payload.user.price;
  //         localStorage.setItem("like", JSON.stringify(action.payload.user));

  //         state.error = null;
  //         console.log(" savedFavorite fulfilled:", state.name);
  //         console.log(" savedFavorite fulfilled:", state.familyname);
  //       })
  //       // وقتی درخواست شکست می‌خورد
  //       .addCase(savedFavorite.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error = action.payload;
  //       });
  //   }
});
export const { like, dislike } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
