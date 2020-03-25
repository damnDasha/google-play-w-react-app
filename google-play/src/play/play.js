import React from "react";
import "./play.css";

export default function Play(props) {
  return (
    <div className="play">
      <h2>{props.app}</h2>
      <div className="app name"> App name: {props.app}</div>
      <div className="category">Category: {props.category}</div>
      <div className="genre"> Genre {props.genres}</div>
      <div className="rating">rating: {props.rating}</div>
    </div>
  );
}
