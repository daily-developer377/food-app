import { useState, useEffect } from "react";
import ShimmerUi from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResIfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.1340201&lng=76.4013471&restaurantId=395367&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log("rest inner data", json);
    setResIfo(json.data);
  };

  const { name, city, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  return resInfo === null ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <h1>{name}</h1>

      <h2>
        {city} - {cuisines.join(",")}
      </h2>

      {/* <ul>
        <li>{resInfo?.cards[2]?.card?.card?.info?.cuisines}</li>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
