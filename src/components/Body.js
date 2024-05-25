import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfTopRatedRestaurent, setListOfTopRatedRestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    console.log(res);
    setListOfTopRatedRestaurent(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfTopRatedRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="top-res">
        <button
          onClick={() => {
            const filteredList = listOfTopRatedRestaurent.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfTopRatedRestaurent(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfTopRatedRestaurent.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
