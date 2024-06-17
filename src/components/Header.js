import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="sticky top-0 flex items-center justify-between bg-[#FFF4D8] drop-shadow-lg">
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
