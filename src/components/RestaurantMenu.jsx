import { useState, useEffect } from "react";
import ShimmerUi from "./Shimmer";
import { useParams } from "react-router";
import { menu_Api } from "../utils/contants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(menu_Api + resId);

    const json = await data.json();

    console.log("rest inner data", json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <ShimmerUi />;
  const { name, city, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("item cards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>

      <h2>Location - {city}</h2>
      <h3>Cost For Two - {costForTwoMessage}</h3>
      <p>Cuisines - {cuisines.join(",")}</p>
      <h3>Menu</h3>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name} - {item.card.info.price || item.card.info.defaultPrice / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
