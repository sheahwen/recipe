import { createSlice } from "@reduxjs/toolkit";

const searchType = createSlice({
  name: "searchType",
  initialState: { type: "" },
  reducers: {
    setSearchType(state, action) {
      state.type = action.payload;
    },
  },
});

export const searchTypeActions = searchType.actions;

export default searchType.reducer;
