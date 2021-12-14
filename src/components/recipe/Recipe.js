import React from "react";
import MealTypeStatic from "../data/MealTypeStatic";
import Ingredient from "./Ingredient";
import RadarChart from "./RadarChart";
import Steps from "./Steps";

const Recipe = () => {
  const recipeObj = MealTypeStatic[0];
  const stepsObj = recipeObj.analyzedInstructions[0].steps;

  return (
    <>
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
                  <i className="fa fa-cog"></i>
                  <p>{recipeObj.preparationMinutes} min</p>
                </div>
                <div>
                  <i className="fa fa-clock-o"></i>
                  <p>{recipeObj.readyInMinutes} min</p>
                </div>
                <div>
                  <i className="fa fa-cutlery"></i>
                  <p>{recipeObj.servings} servings</p>
                </div>
              </div>
              <RadarChart></RadarChart>
            </div>
          </div>
        </div>
        <div className="row ingredients">
          <Ingredient></Ingredient>
        </div>
        <div className="row">
          <Steps stepsData={stepsObj}></Steps>
        </div>
        <button className="favourites">Add to favourites</button>
      </div>
    </>
  );
};

export default Recipe;
