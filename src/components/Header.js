import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  return (
    <div className="flex items-center justify-between bg-[#FFF4D8] drop-shadow-lg">
      <div className="ml-28">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="mx-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-4">Cart</li>
          <li className="mx-4">Hi, {data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
