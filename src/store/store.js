import { configureStore } from "@reduxjs/toolkit";

import inputSearchReducer from "./inputSearch";
import inputSuggestionsReducer from "./inputSuggestions";
import searchTypeReducer from "./searchType";
import advancedSearchReducer from "./advancedSearch";

const store = configureStore({
  reducer: {
    inputSearch: inputSearchReducer,
    inputSuggestions: inputSuggestionsReducer,
    searchType: searchTypeReducer,
    advancedSearch: advancedSearchReducer,
  },
});

export default store;
