import React from "react";

const Steps = (props) => {
  const stepsArr = props.stepsData;

  const steps = [];

  for (const stepsObj of stepsArr) {
    if (stepsObj.step.slice(0, 7) === "How to ") {
      steps.push([stepsObj.step.slice(7)]);
    } else {
      steps[steps.length - 1].push([stepsObj.step]);
    }
  }
  console.log(steps);

  const printSteps = steps.map((part) => {
    const printMini = part.map((sentence, index) => {
      return index !== 0 && <li>{sentence}</li>;
    });
    return (
      <ol>
        {part[0]}
        {printMini}
      </ol>
    );
  });

  return (
    <div className="stepsContainer">
      <h2>Instructions</h2>
      {printSteps}
    </div>
  );
};

export default Steps;
