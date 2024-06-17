import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import GroceryShimmer from "./GroceryShimmer";

const Grocery = () => {
  const [groceryInfo, setGroceryInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
    );
    const dataJson = await data.json();
    setGroceryInfo(dataJson?.data?.widgets[1]?.data);
  };
  if (groceryInfo === null) {
    return <GroceryShimmer />;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-4 p-4">
        {groceryInfo.map((info) => (
          <div className="grocery-info cursor-pointer m-2 p-2 w-28">
            <img src={CDN_URL + info.imageId} />
            <h5 className="text-center text-sm mt-4 font-bold font-sans">
              {info.displayName}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grocery;
