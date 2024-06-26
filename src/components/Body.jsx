import React from "react";
import "../App.css";
import RestroCards from "./RestroCards";
// import restaurantList from "./RestaurantList";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurantss, setListOfRestaurantss] = useState(mockData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurantss.filter(
              (res) => res.data.avgRating > 4.2
            );
            setListOfRestaurantss(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurantss.map((restaurant) => {
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
