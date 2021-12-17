import React from "react";
import { useDispatch } from "react-redux";
import { advancedSearchActions } from "../../store/advancedSearch";
import { useState } from "react";

const MealTypeSearch = () => {
  const dispatch = useDispatch();
  const [lastSelected, setLastSelected] = useState();

  const mealTypeArr = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink",
  ];

  const handleClick = (event) => {
    dispatch(advancedSearchActions.setMealType(event.target.innerText));
    event.target.className = "searchBullet";
    if (lastSelected !== undefined) {
      lastSelected.className = "criteriaBullet";
    }
    setLastSelected(event.target);
  };

  const firstHalf = mealTypeArr.filter((type, index) => index < 7);
  const secondHalf = mealTypeArr.filter((type, index) => index > 7);
  const displayFirstHalf = firstHalf.map((type) => {
    return (
      <>
        <p className="criteriaBullet" onClick={handleClick}>
          {type}
        </p>
      </>
    );
  });
  const displaySecondHalf = secondHalf.map((type) => {
    return (
      <>
        <p className="criteriaBullet" onClick={handleClick}>
          {type}
        </p>
      </>
    );
  });
  return (
    <>
      <div className="row">
        <div className="col-6">{displayFirstHalf}</div>
        <div className="col-6">{displaySecondHalf}</div>
      </div>
    </>
  );
};

export default MealTypeSearch;
