import React from "react";

const Steps = (props) => {
  const stepsArr = props.stepsData;

  const steps = stepsArr.map((obj) => obj.step);

  const printSteps = steps.map((step) => {
    return <li>{step}</li>;
  });

  return (
    <div className="stepsContainer">
      <h2>Instructions</h2>
      <ul>{printSteps}</ul>
    </div>
  );
};

export default Steps;
