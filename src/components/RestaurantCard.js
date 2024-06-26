import { CDN_URL } from "../utils/constants";

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg w-56 h-40" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-2">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{resData.info.sla.deliveryTime} minutes</h5>
    </div>
  );
};

// Takes Reataurent Card and output will be RestaurentCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <>
      <label className="absolute bg-yellow-600 text-white font-bold rounded-xl px-2">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </>
  );
};

export default RestaurantCard;
