import { createSlice } from "@reduxjs/toolkit";

const inputSearch = createSlice({
  name: "inputSearch",
  initialState: { input: "" },
  reducers: {
    setInputSearch(state, action) {
      state.input = action.payload;
    },
    reset(state) {
      state.input = "";
    },
  },
});

export const inputSearchActions = inputSearch.actions;

export default inputSearch.reducer;
