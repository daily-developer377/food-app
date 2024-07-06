import React from "react";
import "../App.css";
import { CDN_URL } from "../utils/contants";

const RestroCards = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  locality,
}) => {
  return (
    <div className="container-card" style={{ display: "flex" }}>
      <div className="card">
        <img src={`${CDN_URL}${cloudinaryImageId}`} alt={name} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{locality}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestroCards;
