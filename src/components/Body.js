import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4485835&lng=78.39080349999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setListOfRestaurent(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h2>
        Seems Like You Are Offline. Please Check Your Internet Connection and
        Try Again.
      </h2>
    );
  }

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {console.log(listOfRestaurent)}
      <div className="filter flex items-center">
        <div className="p-2 mx-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 bg-green-400 rounded-md hover:font-bold"
            onClick={() => {
              const searchElem = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(searchElem);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-res">
          <button
            className="top-res-btn bg-yellow-400 m-4 px-4 py-1 rounded-md hover:font-bold"
            onClick={() => {
              const filteredList = filteredRestaurent.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredRestaurent(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap px-4 m-4">
        {filteredRestaurent.map((restaurant) => (
          <Link
            to={"/restaurent/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* if the restaurent promoted is true then add promoted label to it */}
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
