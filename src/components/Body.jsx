import React from "react";
import "../App.css";
import RestroCards from "./RestroCards";
// import restaurantList from "./RestaurantList";
import mockData from "../utils/mockData";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [listOfRestaurantss, setListOfRestaurantss] = useState([]);

  useEffect(() => {
    console.log("hii use effect called  ");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // Optional Chaining
    setListOfRestaurantss(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants[2].info.name
    // );
  };

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
        <SearchBar />
      </div>
      <div className="res-container">
        {listOfRestaurantss.map((restaurant) => {
          return (
            <RestroCards
              resData={restaurant?.info}
              key={restaurant?.info?.id || restaurant.data.id}
            />
          );
        })}
      </div>

      {/* <RestroCards {...restaurantList[0].data} />
      <RestroCards {...restaurantList[0].data} />
      <RestroCards {...restaurantList[0].data} /> */}
    </div>
  );
};

export default Body;
