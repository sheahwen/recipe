import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: { cartIngredients: [] },
  reducers: {
    addIngredient(state, action) {
      //action.payload is an object with ingredient, quantity, unit
      state.cartIngredients.push(action.payload);
    },
    removeIngredient(state, action) {
      state.cartIngredients.splice(action.payload, 1);
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
