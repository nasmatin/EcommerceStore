import { createSlice } from "@reduxjs/toolkit";

const defaultLikeState = {
  items: [],
};

const loadLikeFromStorage = () => {
  try {
    const savedLike = localStorage.getItem("like");
    if (!savedLike) return defaultLikeState;

    const parsedLike = JSON.parse(savedLike);

    return {
      ...defaultLikeState,
      ...parsedLike,
      items: Array.isArray(parsedLike.items) ? parsedLike.items : [],
    };
  } catch {
    return defaultLikeState;
  }
};

const saveLikeToStorage = (state) => {
  try {
    localStorage.setItem(
      "like",
      JSON.stringify({
        items: state.items,

      })
    );
  } catch (e) {
    console.error("خطا در ذخیره علاقه مندی ها :", e);
  }
};

const initialLikeState = loadLikeFromStorage();

const LikeSlice = createSlice({
  name: "like",
  initialState: initialLikeState,
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;
      const requestedQty = Number(newItem.quantity) || 1;
      const maxAllowed = Math.min(Number(newItem.stock) || 5, 5); // حداکثر ۵ یا موجودی

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // اگر از قبل وجود داشت، تعداد رو اضافه کن (تا سقف مجاز)
        const newQuantity = Math.min(
          existingItem.quantity + requestedQty,
          maxAllowed
        );
        const addedQty = newQuantity - existingItem.quantity;

        if (addedQty <= 0) return; // دیگه نمی‌شه اضافه کرد

        existingItem.quantity = newQuantity;
        existingItem.totalPrice = existingItem.price * newQuantity;

        state.totalCount += addedQty;
        state.totalPrice += existingItem.price * addedQty;
      } else {
        // محصول جدید
        const finalQty = Math.min(requestedQty, maxAllowed);

        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: finalQty,
          stock: newItem.stock,
          image: newItem.image,
          link: newItem.link,
          totalPrice: newItem.price * finalQty,
        });

        state.totalCount += finalQty;
        state.totalPrice += newItem.price * finalQty;
      }

      saveLikeToStorage(state);
    },

       remove: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;

      state.totalCount -= item.quantity;
      state.totalPrice -= item.totalPrice;
      state.items = state.items.filter((item) => item.id !== id);

      saveLikeToStorage(state);
    },

   
  },
});

export const { add, remove } = LikeSlice.actions;
export default LikeSlice.reducer;