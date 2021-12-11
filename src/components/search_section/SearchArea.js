import React from "react";
import IngredientsSearch from "./IngredientsSearch";
import DietSearch from "./DietSearch";
import MealTypeSearch from "./MealTypeSearch";

const SearchArea = () => {
  return (
    <div id="SearchArea">
      <p>New!</p>
      <p>Advanced Filter</p>
      <div className="container">
        <div className="row">
          <IngredientsSearch></IngredientsSearch>
          <DietSearch></DietSearch>
          <MealTypeSearch></MealTypeSearch>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchArea;
