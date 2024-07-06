import React, { useState, useEffect } from "react";
import "../App.css";
import RestroCards from "./RestroCards";
import SearchBar from "./SearchBar";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.1334634&lng=76.3976648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );

    console.log("huu", json);
  };

  const filterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        <SearchBar />
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestroCards
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            avgRating={restaurant.info.avgRating}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
