import { createSlice } from "@reduxjs/toolkit";

const recipe = createSlice({
  name: "recipe",
  initialState: { recipeId: "" },
  reducers: {
    setId(state, action) {
      state.recipeId = action.payload;
    },
    reset(state) {
      state.recipeId = "";
    },
  },
});

export const recipeActions = recipe.actions;

export default recipe.reducer;
