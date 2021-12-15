import { configureStore } from "@reduxjs/toolkit";

import inputSearchReducer from "./inputSearch";
import inputSuggestionsReducer from "./inputSuggestions";
import searchTypeReducer from "./searchType";
import advancedSearchReducer from "./advancedSearch";
import recipeReducer from "./recipe";
import selectedRecipeReducer from "./selectedRecipe";
import mealSearchReducer from "./mealSearch";
import favouritesReducer from "./favourites";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    inputSearch: inputSearchReducer,
    inputSuggestions: inputSuggestionsReducer,
    searchType: searchTypeReducer,
    advancedSearch: advancedSearchReducer,
    recipe: recipeReducer,
    selectedRecipe: selectedRecipeReducer,
    mealSearch: mealSearchReducer,
    favourites: favouritesReducer,
    cart: cartReducer,
  },
});

export default store;
