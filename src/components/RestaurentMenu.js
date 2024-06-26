import React, { useState } from "react";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCatagory from "./RestaurentCatagory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center mt-5 w-6/12 mx-auto">
      <div className="h-28 w-auto bg-gray-100 rounded-xl m-auto flex flex-col items-center justify-center">
        <span className="font-bold text-2xl">{name}</span>
        <span className="font-bold">
          Rating: {avgRating} ({totalRatingsString}) - {areaName} -{" "}
          {costForTwoMessage}
        </span>
      </div>
      {/* Restaurent Menu */}
      {categories.map((category, index) => (
        <RestaurentCatagory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
