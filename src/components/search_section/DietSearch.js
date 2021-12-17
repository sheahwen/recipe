import React from "react";
import { useDispatch } from "react-redux";
import {
  advancedSearchActions,
} from "../../store/advancedSearch";

const DietSearch = () => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    if (event.target.className === "criteriaBullet") {
      dispatch(advancedSearchActions.setDiet(event.target.innerText));
      event.target.className = "searchBullet";
    } else {
      dispatch(advancedSearchActions.removeDiet(event.target.innerText));
      event.target.className = "criteriaBullet";
    }
  };

  return (
    <>
      <p className="criteriaBullet" onClick={handleClick}>
        diabetic friendly
      </p>
      <p className="criteriaBullet" onClick={handleClick}>
        low cholesterol
      </p>
      <p className="criteriaBullet" onClick={handleClick}>
        low calories
      </p>
      <p className="criteriaBullet" onClick={handleClick}>
        vegetarian
      </p>
      <p className="criteriaBullet" onClick={handleClick}>
        vegan
      </p>
    </>
  );
};

export default DietSearch;
