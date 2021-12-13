import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import searchResults from "../../store/searchResults";

const SearchResults = (props) => {
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.searchType.type);
  const inputSearch = useSelector((state) => state.inputSearch.input);
  const [queryResults, setQueryResults] = useState([]);

  // CALLING API TO GET SEARCH RESULTS
  const generateUrl = () => {
    const SEARCHURL = "https://api.spoonacular.com/recipes/";
    const APIKEY = "66f8a7f03d564fb9967240266bb00633";
    const searchType = "complexSearch?";
    const queryStr = "query=" + inputSearch;
    const NUMBER = "&number=6";
    const DETAILS = "&addRecipeInformation=true";
    const url =
      SEARCHURL +
      searchType +
      "apiKey=" +
      APIKEY +
      "&" +
      queryStr +
      NUMBER +
      DETAILS;
    console.log(url);
    return url;
  };

  const getResults = async (url) => {
    const data = await fetch(url);
    const parsedData = await data.json();
    setQueryResults(parsedData.results);
  };

  // useEffect(() => {
  //   const url = generateUrl();
  //   getResults(url);
  // }, []);

  // PRINTING CARDS
  const createCardsTop = queryResults.map((recipe, index) => {
    return (
      index < 3 && (
        <Card
          image={recipe.image}
          cuisines={recipe.cuisines}
          dishTypes={recipe.dishTypes}
          title={recipe.title}
        ></Card>
      )
    );
  });

  const createCardsBottom = queryResults.map((recipe, index) => {
    return (
      index > 2 && (
        <Card
          image={recipe.image}
          cuisines={recipe.cuisines}
          dishTypes={recipe.dishTypes}
          title={recipe.title}
        ></Card>
      )
    );
  });

  //STRING MANIPULATION FOR TITLE, DEPENDING ON SEARCH TYPE
  const titleSpanFunction = () => {
    if (searchType === "name") {
      return inputSearch;
    }
  };
  const titleSpan = titleSpanFunction();

  return (
    <div className="container">
      <div className="row">
        <h1>
          Search results for: <span>{titleSpan}</span>
          {inputSearch}
        </h1>
      </div>
      <div className="row">{createCardsTop}</div>
      <div className="row">{createCardsBottom}</div>
    </div>
  );
};

export default SearchResults;
