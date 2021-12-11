import React from "react";

const MealTypeSearch = () => {
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
  const firstHalf = mealTypeArr.filter((type, index) => index < 7);
  const secondHalf = mealTypeArr.filter((type, index) => index > 7);
  const displayFirstHalf = firstHalf.map((type) => {
    return (
      <>
        <p className="criteriaBullet">{type}</p>
      </>
    );
  });
  const displaySecondHalf = secondHalf.map((type) => {
    return (
      <>
        <p className="criteriaBullet">{type}</p>
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
