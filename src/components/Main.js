import React, { useEffect, useState } from "react";
import MealType from "./MealType";
import SearchArea from "./search_section/SearchArea";
import Recipe from "./recipe/Recipe";
import SearchResults from "./search_results/SearchResults";

const Main = () => {
  const [query, setQuery] = useState();

  //Complex Search
  const APIKEY = "66f8a7f03d564fb9967240266bb00633";
  const SEARCHURL = "https://api.spoonacular.com/recipes/";
  // const searchType = "complexSearch?";
  const queryStr = "type=breakfast&sort=popularity&number=3";
  const includeRecipeInfo = "addRecipeInformation";
  // const url =
  //   SEARCHURL +
  //   searchType +
  //   "apiKey=" +
  //   APIKEY +
  //   "&" +
  //   queryStr +
  //   "&" +
  //   includeRecipeInfo +
  //   "=true";

  //Get recipe information
  const searchId = "715569";
  // const searchType = "information?";
  // const url = SEARCHURL + searchId + "/" + searchType + "apiKey=" + APIKEY;

  // Get ingredient information
  // const searchType = "ingredientWidget.json?";
  // const url = SEARCHURL + searchId + "/" + searchType + "apiKey=" + APIKEY;

  // Get id taste
  const searchType = "tasteWidget.json?";
  const url = SEARCHURL + searchId + "/" + searchType + "apiKey=" + APIKEY;

  const advancedFilterResult = async (url) => {
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setQuery(parsedData);
  };

  // useEffect(() => {
  //   advancedFilterResult(url);
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <MealType></MealType>
      </div>
      <div className="row">
        <SearchArea></SearchArea>
      </div>
      <div className="row">
        <Recipe></Recipe>
      </div>
      <div className="row">
        <SearchResults></SearchResults>
      </div>
    </div>
  );
};

export default Main;
