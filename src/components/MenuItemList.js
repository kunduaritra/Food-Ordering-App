import React from "react";
import { CDN_URL } from "../utils/constants";
import NonVegSVG from "../utils/NonVegSVG";
import VegSVG from "../utils/VegSVG";

const MenuItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 flex flex-col">
              {/* Name */}
              <div className="h-4 w-4 my-2">
                {item?.card?.info?.itemAttribute?.vegClassifier == "NONVEG" ? (
                  <NonVegSVG />
                ) : (
                  <VegSVG />
                )}
              </div>
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}
              </span>
              {/* price */}
              <span className="text-red-700 font-bold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            {/* description */}
            <p className="text-left text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4 h-auto">
            <img
              className="rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
            <div className="absolute my-[-30] mx-10">
              <button className="bg-orange-500 hover:bg-green-500 text-white font-bold rounded-xl px-4 shadow-xl">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
