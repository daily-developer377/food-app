import { useState, useEffect } from "react";
import ShimmerUi from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

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
    setResInfo(json.data);
  };

  const menuApi =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.1340201&lng=76.4013471&restaurantId=229326&catalog_qa=undefined&submitAction=ENTER";

  const { name, city, cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

  // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return resInfo === null ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <h1>{name}</h1>

      <h2>Location - {city}</h2>
      <h3>Cost For Two - {costForTwoMessage}</h3>
      <p>Cuisines - {cuisines.join(",")}</p>

      {/* <ul>
        <li>{resInfo?.cards[2]?.card?.card?.info?.cuisines}</li>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
