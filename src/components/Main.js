import React, { useEffect, useState } from "react";
import MealType from "./MealType";
import SearchArea from "./search_section/SearchArea";

const Main = () => {
  const [query, setQuery] = useState();

  //Complex Search
  const APIKEY = "66f8a7f03d564fb9967240266bb00633";
  const searchUrl = "https://api.spoonacular.com/recipes/complexSearch?";
  const queryStr = "type=breakfast&sort=popularity&number=3";
  const includeRecipeInfo = "addRecipeInformation";
  const url =
    searchUrl +
    "apiKey=" +
    APIKEY +
    "&" +
    queryStr +
    "&" +
    includeRecipeInfo +
    "=true";

  //Search by id

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
    <div>
      <MealType></MealType>
      <SearchArea></SearchArea>
    </div>
  );
};

export default Main;
