import { createSlice } from "@reduxjs/toolkit";

const savedFavorite = [];

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: Array.isArray(savedFavorite) ? savedFavorite : [],

    status: "idle",
    error: "",
  },
  reducers: {
    loadFavorites: (state, action) => {
      const userId = action.payload;

      try {
        const savedFavorite = localStorage.getItem(`like_${userId}`);
        state.items = savedFavorite ? JSON.parse(savedFavorite) : [];

        if (!Array.isArray(state.items)) {
          state.items = [];
        }
      } catch {
        state.items = [];
      }
    },
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
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (user?.id) {
        localStorage.setItem(`like_${user.id}`, JSON.stringify(state.items));
      }
    },
    dislike: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (user?.id) {
        localStorage.setItem(`like_${user.id}`, JSON.stringify(state.items));
      }
    },
  },
});
export const { like, dislike, loadFavorites } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
