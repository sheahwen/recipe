import React from "react";
import Ingredient from "./Ingredient";
import RadarChart from "./RadarChart";
import Steps from "./Steps";
import { useDispatch, useSelector } from "react-redux";
import { favouritesActions } from "../../store/favourites";

const Recipe = () => {
  const recipeObj = useSelector((state) => state.selectedRecipe.recipe);
  const existingFavourites = useSelector((state) => state.favourites.recipes);
  const stepsObj = recipeObj.analyzedInstructions[0].steps;
  const recipeId = recipeObj.id;

  //Add to favourites
  //Add to favourites - Check existing favourites
  const checkExisting = (recipeId) => {
    const match = existingFavourites.find((recipes) => recipes.id === recipeId);
    if (match === undefined) {
      return false;
    } else return true;
  };
  const dispatch = useDispatch();
  const handleFavourites = () => {
    if (checkExisting(recipeId) === false) {
      dispatch(favouritesActions.addFavourites(recipeObj));
    }
  };

  // check for preparation minutes
  const displayPreparation = () => {
    if (recipeObj.preparationMinutes !== undefined) {
      return (
        <>
          <i className="fa fa-cog"></i>
          <p>{recipeObj.preparationMinutes} min</p>
        </>
      );
    }
  };

  return (
    <>
      {recipeId === "" && <h2>No recipe selected</h2>}
      {recipeId !== undefined && (
        <div className="container recipe">
          <div className="row recipeUpper">
            <div className="col-5">
              <img src={recipeObj.image}></img>
            </div>
            <div className="col-7">
              <h2 id="recipeTitle">{recipeObj.title}</h2>
              <div className="timeChart">
                <div id="timeServing">
                  <div>
                    {displayPreparation()}
                    {/* <i className="fa fa-cog"></i>
                    <p>
                      {recipeObj.preparationMinutes}
                      min
                    </p> */}
                  </div>
                  <div>
                    <i className="fa fa-clock-o"></i>
                    <p>{recipeObj.readyInMinutes} min</p>
                  </div>
                  <div>
                    <i className="fa fa-cutlery"></i>
                    <p>Serves {recipeObj.servings}</p>
                  </div>
                </div>
                <RadarChart recipeId={recipeId}></RadarChart>
              </div>
            </div>
          </div>
          <div className="row ingredients">
            <Ingredient recipeId={recipeId}></Ingredient>
          </div>
          <div className="row stepsRow">
            <Steps stepsData={stepsObj}></Steps>
          </div>
          <div className="row favouritesDiv">
            <button className="favouritesButton" onClick={handleFavourites}>
              {checkExisting(recipeId) ? "Favourited" : "Add to favourites"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
