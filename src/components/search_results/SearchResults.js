import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import GetDataUrl from "../../hooks/GetDataUrl";
import { advancedSearchActions } from "../../store/advancedSearch";
import { inputSearchActions } from "../../store/inputSearch";
import { selectedRecipeActions } from "../../store/selectedRecipe";

const SearchResults = (props) => {
  // REDUX AND STATES
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.searchType.type);
  const inputSearch = useSelector((state) => state.inputSearch.input);
  const advancedSearch = useSelector((state) => state.advancedSearch);
  const [queryResults, setQueryResults] = useState([]);

  // LIFT ID FROM CARDS
  const handleLift = (clickedId) => {
    const recipeSelected = queryResults.find(
      (recipe) => recipe.id === Number(clickedId)
    );
    console.log(recipeSelected);
    dispatch(selectedRecipeActions.setRecipe(recipeSelected));
  };

  // CALLING API TO GET SEARCH RESULTS
  const getResults = async (url, { signal }) => {
    const data = await fetch(url, { signal });
    const parsedData = await data.json();
    setQueryResults(parsedData.results);
  };

  useEffect(() => {
    const controller = new AbortController();
    if (searchType === "name") {
      const url = GetDataUrl(searchType, inputSearch);
      getResults(url, controller.signal);
    } else if (searchType === "advanced") {
      const url = GetDataUrl(searchType, advancedSearch);
      getResults(url, controller.signal);
    }

    // CLEAN UP CODES - RESET ALL SEARCH RELATED STATES AND STOP FETCH
    return () => {
      controller.abort();
      dispatch(advancedSearchActions.reset());
      // ??????is this necesary??????????
      dispatch(inputSearchActions.reset());
    };
  }, [searchType, inputSearch]);

  // PRINTING CARDS
  const createCardsTop = queryResults.map((recipe, index) => {
    return (
      index < 3 && (
        <Card
          image={recipe.image}
          cuisines={recipe.cuisines}
          dishTypes={recipe.dishTypes}
          title={recipe.title}
          id={recipe.id}
          liftingId={handleLift}
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
          id={recipe.id}
          liftingId={handleLift}
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
