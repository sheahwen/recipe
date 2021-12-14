import { configureStore } from "@reduxjs/toolkit";

import inputSearchReducer from "./inputSearch";
import inputSuggestionsReducer from "./inputSuggestions";
import searchTypeReducer from "./searchType";
import advancedSearchReducer from "./advancedSearch";
import recipeReducer from "./recipe";

const store = configureStore({
  reducer: {
    inputSearch: inputSearchReducer,
    inputSuggestions: inputSuggestionsReducer,
    searchType: searchTypeReducer,
    advancedSearch: advancedSearchReducer,
    recipe: recipeReducer,
  },
});

export default store;
