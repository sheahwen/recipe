import { createSlice } from "@reduxjs/toolkit";

const searchResults = createSlice({
  name: "searchResults",
  initialState: { recipes: [] },
  reducers: {
    setRecipes(state, action) {
      state.recipes = action.payload;
    },
  },
});

export const searchResultsActions = searchResults.actions;
export default searchResults.reducer;
