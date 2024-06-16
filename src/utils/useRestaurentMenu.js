import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const dataJson = await data.json();
    setResInfo(dataJson);
  };

  return resInfo;
};

export default useRestaurentMenu;
