import { createSlice } from "@reduxjs/toolkit";

const selectedRecipe = createSlice({
  name: "selectedRecipe",
  initialState: { recipe: {} },
  reducers: {
    setRecipe(state, action) {
      state.recipe = action.payload;
    },
  },
});

export const selectedRecipeActions = selectedRecipe.actions;

export default selectedRecipe.reducer;
