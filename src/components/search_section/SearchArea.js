import React from "react";
import IngredientsSearch from "./IngredientsSearch";
import DietSearch from "./DietSearch";
import MealTypeSearch from "./MealTypeSearch";

const SearchArea = () => {
  return (
    <div id="searchArea">
      <p id="advancedText">Advanced Filters</p>
      <div className="container filterContainer">
        <div className="row">
          <div className="col-3">
            <div className="searchBy">Ingredients</div>
          </div>
          <div className="col-3">
            <div className="searchBy">Dietary Concerns</div>
          </div>
          <div className="col-6">
            <div className="searchBy">Meal Type</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <IngredientsSearch></IngredientsSearch>
          </div>
          <div className="col-3">
            <DietSearch></DietSearch>
          </div>
          <div className="col-6">
            <MealTypeSearch></MealTypeSearch>
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchArea;
