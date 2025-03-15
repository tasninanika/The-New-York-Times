import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center space-x-5 *:text-[#706F6F] *:text-[18px]">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login navbar-end flex gap-3 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none px-10 bg-[#403F3F]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
