import { createSlice } from "@reduxjs/toolkit";

const advancedSearch = createSlice({
  name: "advancedSearch",
  initialState: { ingredients: [], diet: [], mealType: "" },
  reducers: {
    setIngredient(state, action) {
      state.ingredients = [...state.ingredients, action.payload];
    },
    setDiet(state, action) {
      state.diet = [...state.diet, action.payload];
    },
    removeDiet(state, action) {
      const position = state.diet.indexOf(action.payload);
      state.diet.splice(position, 1);
    },
    setMealType(state, action) {
      state.mealType = action.payload;
    },
    reset(state) {
      state.ingredients = [];
      state.diet = [];
      state.mealType = "";
    },
  },
});

export const advancedSearchActions = advancedSearch.actions;

export default advancedSearch.reducer;
