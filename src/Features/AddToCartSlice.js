import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    if (!savedCart) return defaultCartState;

    const parsedCart = JSON.parse(savedCart);

    return {
      ...defaultCartState,
      ...parsedCart,
      items: Array.isArray(parsedCart.items) ? parsedCart.items : [],
    };
  } catch {
    return defaultCartState;
  }
};

const saveCartToStorage = (state) => {
  try {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: state.items,
        totalCount: state.totalCount,
        totalPrice: state.totalPrice,
      })
    );
  } catch (e) {
    console.error("خطا در ذخیره سبد خرید:", e);
  }
};

const initialCartState = loadCartFromStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
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

      saveCartToStorage(state);
    },

    increment: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;

      const maxAllowed = Math.min(Number(item.stock) || 5, 5);
      if (item.quantity >= maxAllowed) return;

      item.quantity += 1;
      item.totalPrice += item.price;
      state.totalCount += 1;
      state.totalPrice += item.price;

      saveCartToStorage(state);
    },

    decrement: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (!item || item.quantity <= 1) return;

      item.quantity -= 1;
      item.totalPrice -= item.price;
      state.totalCount -= 1;
      state.totalPrice -= item.price;

      saveCartToStorage(state);
    },

    reset: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;

      state.totalCount -= item.quantity;
      state.totalPrice -= item.totalPrice;
      state.items = state.items.filter((item) => item.id !== id);

      saveCartToStorage(state);
    },

    clear: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      saveCartToStorage(state);
    },
  },
});

export const { add, reset, increment, decrement, clear } = cartSlice.actions;
export default cartSlice.reducer;