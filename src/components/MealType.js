import React, { useState, useEffect } from "react";
import MealTypeStatic from "./data/MealTypeStatic";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { selectedRecipeActions } from "../store/selectedRecipe";
import GetDataUrl from "../hooks/GetDataUrl";

const MealType = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [queryResultsTwo, setQueryResultsTwo] = useState([]);
  const dispatch = useDispatch();

  const handleLift = (clickedId) => {
    const recipeSelected = queryResults.find(
      (recipe) => recipe.id === Number(clickedId)
    );
    dispatch(selectedRecipeActions.setRecipe(recipeSelected));
  };

  // CALLING API TO GET SEARCH RESULTS
  const getResults = async (url, { signal }) => {
    const dataOne = await fetch(url[0], { signal });
    const dataTwo = await fetch(url[1], { signal });
    const parsedDataOne = await dataOne.json();
    const parsedDataTwo = await dataTwo.json();
    console.log(url[0]);
    console.log(url[1]);
    setQueryResults(parsedDataOne.results);
    setQueryResultsTwo(parsedDataTwo.results);
  };

  useEffect(() => {
    const controller = new AbortController();
    const urlOne = GetDataUrl("topThree", "trash");
    const urlTwo = GetDataUrl("mealPopular", "main course");
    const url = [urlOne, urlTwo];
    getResults(url, controller);
    // CLEAN UP CODES - RESET ALL SEARCH RELATED STATES AND STOP FETCH
    return () => {
      controller.abort();
    };
  }, []);

  // PRINTING CARDS
  const createCards = queryResults.map((recipe) => {
    return (
      <Card
        image={recipe.image}
        cuisines={recipe.cuisines}
        dishTypes={recipe.dishTypes}
        title={recipe.title}
        id={recipe.id}
        liftingId={handleLift}
      ></Card>
    );
  });
  const createCardsTwo = queryResultsTwo.map((recipe, index) => {
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

  return (
    <div className="container mealTypeContainer">
      <div className="titleSeeMore">
        <h2 id="typeOne">Recipes</h2>
      </div>
      <div className="eachType row">{createCards}</div>
      <div className="titleSeeMore">
        <h2 id="typeTwo">Main Course</h2>
        <p>See more</p>
      </div>
      <div className="eachType row">{createCardsTwo}</div>
    </div>
  );
};

export default MealType;
