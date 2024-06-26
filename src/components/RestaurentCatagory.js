import { IoMdArrowDropdownCircle } from "react-icons/io";
import MenuItemList from "./MenuItemList";

const RestaurentCatagory = ({ data, showItems, setShowIndex }) => {
  const handleClick = (e) => {
    setShowIndex();
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg mt-5">
      {/* Header */}
      <div
        className="flex justify-between mx-4 p-2 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title} ({data.itemCards.length})
        </span>
        <span>
          <IoMdArrowDropdownCircle />
        </span>
      </div>
      {showItems && <MenuItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurentCatagory;
