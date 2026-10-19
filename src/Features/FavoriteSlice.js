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
    },
  },
 
});
export const { like, dislike } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
