import { createSlice } from "@reduxjs/toolkit";

const favourites = createSlice({
  name: "favourites",
  initialState: { recipes: [] },
  reducers: {
    addFavourites(state, action) {
      //action payload will be a recipe obj, same as recipe state
      state.recipes.push(action.payload);
    },
  },
});

export const favouritesActions = favourites.actions;

export default favourites.reducer;
