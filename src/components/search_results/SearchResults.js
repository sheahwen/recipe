import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import GetDataUrl from "../../hooks/GetDataUrl";

const SearchResults = (props) => {
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.searchType.type);
  const inputSearch = useSelector((state) => state.inputSearch.input);
  const advancedSearch = useSelector((state) => state.advancedSearch);
  const [queryResults, setQueryResults] = useState([]);

  // CALLING API TO GET SEARCH RESULTS

  const getResults = async (url) => {
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log("results", parsedData.results);
    setQueryResults(parsedData.results);
  };

  useEffect(() => {
    if (searchType === "name") {
      const url = GetDataUrl(searchType, inputSearch);
      getResults(url);
    } else if (searchType === "advanced") {
      const url = GetDataUrl(searchType, advancedSearch);
      console.log("advanced search");
      console.log(url);
      getResults(url);
    }

    return () => {};
  }, [searchType]);

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
    } else if (searchType === "advanced") {
      return "do later";
    }
  };
  const titleSpan = titleSpanFunction();

  return (
    <div className="container searchResultsContainer">
      <div className="row">
        <h1>
          Search result(s) for: <span>{titleSpan}</span>
        </h1>
      </div>
      <div className="row">{createCardsTop}</div>
      <div className="row">{createCardsBottom}</div>
    </div>
  );
};

export default SearchResults;
