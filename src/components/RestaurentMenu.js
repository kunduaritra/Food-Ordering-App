import { CDN_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, avgRating, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {areaName} - Rating: {avgRating} - {costForTwoMessage}
      </p>
      <div>
        <h2>
          {
            resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[4].card.card.title
          }
        </h2>
        <ul>
          {itemCards &&
            itemCards.map((item) => (
              <>
                <li key={item.card.info.id}>
                  {item.card.info.name} - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                  <img src={CDN_URL + item.card.info.imageId} width="140px" />
                </li>
                <p>{item.card.info.description}</p>
              </>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
