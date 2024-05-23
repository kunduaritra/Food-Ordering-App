import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfTopRatedRestaurent, setListOfTopRatedRestaurent] =
    useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="top-res">
        <button
          onClick={() => {
            const filteredList = resList.filter(
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
