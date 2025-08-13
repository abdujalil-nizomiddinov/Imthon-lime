import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalCount += 1;
      state.totalPrice += product.price;
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalCount -= 1;
          state.totalPrice -= item.price;
        } else {
          state.totalCount -= 1;
          state.totalPrice -= item.price;
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        state.totalCount -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
