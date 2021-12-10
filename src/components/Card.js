import "./Card.css";
import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="row div-border">
        <div className="col-sm-5">{props.activity}</div>
        <div className="col-sm-5">{props.time}</div>
      </div>
    </div>
  );
};

export default Card;
