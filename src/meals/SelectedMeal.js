import React, { useEffect, useState } from "react";
import GetDataUrl from "../hooks/GetDataUrl";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectedRecipeActions } from "../store/selectedRecipe";

const SelectedMeal = () => {
  const dispatch = useDispatch();
  const mealType = useSelector((state) => state.mealSearch.meal);

  const handleLift = (clickedId) => {
    const recipeSelected = queryResults.find(
      (recipe) => recipe.id === Number(clickedId)
    );
    console.log(recipeSelected);
    dispatch(selectedRecipeActions.setRecipe(recipeSelected));
  };

  const [queryResults, setQueryResults] = useState([]);

  const getData = async (url) => {
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log("url", url);
    setQueryResults((prevState) => [...prevState, ...parsedData.results]);
  };

    useEffect(() => {
      if (mealType !== undefined) {
        let URL = GetDataUrl("mealPopular", mealType);
        getData(URL);
        URL = GetDataUrl("mealRandom", mealType);
        getData(URL);
      }
    }, [mealType]);

  // PRINTING CARDS
  const createCardsOne = queryResults.map((recipe, index) => {
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
  const createCardsTwo = queryResults.map((recipe, index) => {
    return (
      index > 2 &&
      index < 6 && (
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
  const createCardsThree = queryResults.map((recipe, index) => {
    return (
      index > 5 &&
      index < 9 && (
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
  const createCardsFour = queryResults.map((recipe, index) => {
    return (
      index > 8 &&
      index < 12 && (
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

  // TITLE
  let mealTypeStr = "";
  const strArr = {
    "main course": "Main Course",
    appetizer: "Appetizer",
    dessert: "Dessert",
    salad: "Salad",
    beverage: "Beverage",
  };
  mealTypeStr = strArr[mealType];

  return (
    <div className="container selectedMealContainer">
      {console.log(queryResults)}
      <h2 className="mealTypeStr">{mealTypeStr}</h2>
      <div className="row">{createCardsOne}</div>
      <div className="row">{createCardsTwo}</div>
      <div className="row">{createCardsThree}</div>
      <div className="row">{createCardsFour}</div>
    </div>
  );
};

export default SelectedMeal;
