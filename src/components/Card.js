import React from "react";

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

  // END

  return (
    <div className="eachImage col" id={props.id}>
      <img src={props.image}></img>
      <p className="cuisines">{cuisineStr}</p>
      <p className="title">{props.title}</p>
    </div>
  );
};

export default Card;
