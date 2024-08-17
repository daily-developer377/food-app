import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.1340201&lng=76.4013471&restaurantId=395367&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
  };

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Appetizers</li>
        <li>Main Course</li>
        <li>Desserts</li>
        <li>Beverages</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
