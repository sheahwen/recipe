import React from "react";

const Steps = (props) => {
  const stepsArr = props.stepsData;
  console.log(stepsArr);

  const steps = stepsArr.map((obj) => obj.step);
  console.log(steps);
  // const steps = [[]];

  // for (const stepsObj of stepsArr) {
  //   if (stepsObj.step.slice(0, 7) === "How to ") {
  //     steps.push([stepsObj.step.slice(7)]);
  //   } else {
  //     let position = steps.length - 1;
  //     if (position === -1) {
  //       position = 0;
  //     }
  //     steps[position].push([stepsObj.step]);
  //   }
  // }
  // console.log(steps);

  // const printSteps = steps.map((part) => {
  //   const printMini = part.map((sentence, index) => {
  //     return index !== 0 && <li>{sentence}</li>;
  //   });
  //   return (
  //     <ol>
  //       {part[0]}
  //       {printMini}
  //     </ol>
  //   );
  // });

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
