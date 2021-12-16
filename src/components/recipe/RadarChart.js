import React, { useEffect, useState } from "react";
// import TasteStatic from "../data/TasteStatic";
import GetDataUrl from "../../hooks/GetDataUrl";

const RadarChart = (props) => {
  // CALLING API FOR TASTE
  const recipeId = props.recipeId;
  const URL = GetDataUrl("taste", recipeId);
  let TasteStatic = {};

  const [chartPoints, setChartPoints] = useState({});

  const getData = async (url) => {
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    TasteStatic = parsedData;

    // TO GENERATE XY COORDINATE
    const tasteObj = {};
    tasteObj.sweet = TasteStatic.sweetness / 100;
    tasteObj.salty = TasteStatic.saltiness / 100;
    tasteObj.sour = TasteStatic.sourness / 100;
    tasteObj.bitter = TasteStatic.bitterness / 100;
    tasteObj.savoury = TasteStatic.savoriness / 100;
    tasteObj.fatty = TasteStatic.fattiness / 100;
    console.log(tasteObj);

    const chartXY = {};
    chartXY.sweet = [50, 50 - 50 * tasteObj.sweet];
    chartXY.salty = [50 + 50 * tasteObj.salty, 50 - 25 * tasteObj.salty];
    chartXY.sour = [50 + 50 * tasteObj.sour, 50 + 25 * tasteObj.sour];
    chartXY.bitter = [50, 50 + 50 * tasteObj.bitter];
    chartXY.savoury = [50 - 50 * tasteObj.savoury, 50 + 25 * tasteObj.savoury];
    chartXY.fatty = [50 - 50 * tasteObj.fatty, 50 - 25 * tasteObj.fatty];

    setChartPoints(chartXY);
  };

  useEffect(() => {
    getData(URL);
  }, []);

  let clipPath = "";
  for (const arr of Object.values(chartPoints)) {
    clipPath += `${Math.round(arr[0])}% ${Math.round(arr[1])}%,`;
  }
  clipPath = clipPath.slice(0, -1);

  return (
    <div className="chart">
      <div className="chartTastes">
        <p id="tasteSweet">Sweet</p>
        <p id="tasteSalty">Salty</p>
        <p id="tasteSour">Sour</p>
        <p id="tasteBitter">Bitter</p>
        <p id="tasteSavoury">Savoury</p>
        <p id="tasteFatty">Fatty</p>
      </div>
      <div className="chartBg">
        <div className="chartContainer">
          <div
            className="starform in"
            style={{ clipPath: `polygon(${clipPath})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
