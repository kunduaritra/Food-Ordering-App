import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

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
    return <Shimmer />;
  }
  return (
    <>
      <div className="grocery-list">
        {groceryInfo.map((info) => (
          <div className="grocery-info">
            <img src={CDN_URL + info.imageId} />
            <h5>{info.displayName}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grocery;
