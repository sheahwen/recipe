import { createSlice } from "@reduxjs/toolkit";

const mealSearch = createSlice({
  name: "mealSearch",
  initialState: { meal: "" },
  reducers: {
    setMealSearch(state, action) {
      state.meal = action.payload;
    },
  },
});

export const mealSearchActions = mealSearch.actions;

export default mealSearch.reducer;
