import React from "react";
import "../App.css";
import RestroCards from "./RestroCards";
import restaurantList from "./RestaurantList";

const Home = () => {
  return (
    <>
      {restaurantList.map((restaurant) => {
        // console.log(restaurant);
        return <RestroCards {...restaurant.data} key={restaurant.data.id}  />;
      })}

      {/* <RestroCards {...restaurantList[0].data} />
      <RestroCards {...restaurantList[0].data} />
      <RestroCards {...restaurantList[0].data} /> */}
    </>
  );
};

export default Home;
