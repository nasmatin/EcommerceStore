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

      const exists = state.items.some(
        (item) => Number(item.id) === Number(likeitem.id)
      );

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

      state.items = state.items.filter(
        (item) => Number(item.id) !== Number(id)
      );

      const user = JSON.parse(localStorage.getItem("user") || "null");

      if (user?.id) {
        localStorage.setItem(`like_${user.id}`, JSON.stringify(state.items));
      }
    },

    // بررسی وضعیت محصول و تغییر آن
    toggleFavorite: (state, action) => {
      const product = action.payload;

      const exists = state.items.some(
        (item) => Number(item.id) === Number(product.id)
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => Number(item.id) !== Number(product.id)
        );
      } else {
        state.items.push(product);
      }

      const user = JSON.parse(localStorage.getItem("user") || "null");

      if (user?.id) {
        localStorage.setItem(`like_${user.id}`, JSON.stringify(state.items));
      }
    },
  },
});

export const {
  like,
  dislike,
  loadFavorites,
  toggleFavorite,
} = FavoriteSlice.actions;

export default FavoriteSlice.reducer;