import { createSlice } from "@reduxjs/toolkit";

const inputSuggestions = createSlice({
  name: "inputSuggestions",
  initialState: { suggestions: [] },
  reducers: {
    setInputSuggestions(state, action) {
      state.suggestions = action.payload.map((element) => element);
    },
  },
});

export const inputSuggestionsActions = inputSuggestions.actions;

export default inputSuggestions.reducer;
