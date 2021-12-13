import { configureStore } from "@reduxjs/toolkit";

import inputSearchReducer from "./inputSearch";
import inputSuggestionsReducer from "./inputSuggestions";
import searchTypeReducer from "./searchType";

const store = configureStore({
  reducer: {
    inputSearch: inputSearchReducer,
    inputSuggestions: inputSuggestionsReducer,
    searchType: searchTypeReducer,
  },
});

export default store;
