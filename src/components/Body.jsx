import React from "react";
import "../App.css";
import RestroCards from "./RestroCards";
// import restaurantList from "./RestaurantList";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurantss, setListOfRestaurantss] = useState([
    {
      id: "74453",
      name: "Domino's Pizza",
      avgRating: "4.0",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
    },
    {
      id: "74454",
      name: "KFc",
      avgRating: "4.0",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {mockData.map((restaurant) => {
          return <RestroCards {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      {/* <RestroCards {...restaurantList[0].data} />
      <RestroCards {...restaurantList[0].data} />
      <RestroCards {...restaurantList[0].data} /> */}
    </div>
  );
};

export default Body;
