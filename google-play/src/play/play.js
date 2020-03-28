import React from "react";
import "./play.css";

export default function Play(props) {
  return (
    <div className="play">
      <h2>{props.app}</h2>
      <div className="app name"> App name: {props.App}</div>
      <div className="category">Category: {props.Category}</div>
      <div className="genre"> Genre {props.Genres}</div>
      <div className="rating">rating: {props.Rating}</div>
    </div>
  );
}
