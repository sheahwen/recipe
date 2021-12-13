import { createSlice } from "@reduxjs/toolkit";

const inputSearch = createSlice({
  name: "inputSearch",
  initialState: { input: "cookie" },
  reducers: {
    setInputSearch(state, action) {
      state.input = action.payload;
    },
  },
});

export const inputSearchActions = inputSearch.actions;

export default inputSearch.reducer;
