import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { recipeActions } from "../store/recipe";

const Card = (props) => {
  // LOGICS FOR PRINTING OF CUISINES
  let cuisineArr = props.cuisines;
  if (cuisineArr.length === 0) {
    cuisineArr = props.dishTypes;
  }
  const length = Math.min(cuisineArr.length, 3);
  let cuisineStr = "";
  for (let i = 0; i < length; i++) {
    const str = cuisineArr[i];
    const strUpper = str[0].toUpperCase() + str.substring(1);
    cuisineStr += `${strUpper}, `;
  }
  cuisineStr = cuisineStr.slice(0, -2);

  // HANDLE CLICK => ROUTE TO RECIPE PAGE
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(recipeActions.setId(event.target.id));
  };

  return (
    <div className="eachImage col-4" id={props.id}>
      <div class="imageContainer">
        <img src={props.image}></img>
        <div class="overlay">
          <Link to="/recipe">
            <div class="text" id={props.id} onClick={handleClick}>
              See recipe
            </div>
          </Link>
        </div>
        <p className="cuisines">{cuisineStr}</p>
        <p className="title">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
