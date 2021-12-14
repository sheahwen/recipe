import React, { useEffect, useState } from "react";
import MealType from "./MealType";
import SearchArea from "./search_section/SearchArea";
import Recipe from "./recipe/Recipe";
import SearchResults from "./search_results/SearchResults";

const Main = () => {
  const [query, setQuery] = useState();

  //Get recipe information
  const searchId = "715569";
  // const searchType = "information?";
  // const url = SEARCHURL + searchId + "/" + searchType + "apiKey=" + APIKEY;

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
    </div>
  );
};

export default Main;
