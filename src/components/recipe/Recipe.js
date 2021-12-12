import React from "react";
import MealTypeStatic from "../data/MealTypeStatic";
import Ingredient from "./Ingredient";
import RadarChart from "./RadarChart";

const Recipe = () => {
  const recipeObj = MealTypeStatic[0];
  const stepsObj = recipeObj.analyzedInstructions[0].steps;

  const printSteps = stepsObj.map((eachStep) => {
    return <li>{eachStep.step}</li>;
  });
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
            <Ingredient></Ingredient>
          </div>
        </div>
        <div className="row">
          <ol>Steps</ol>
          {printSteps}
        </div>
      </div>
    </>
  );
};

export default Recipe;
