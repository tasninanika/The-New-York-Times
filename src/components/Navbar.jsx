import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
          {user?.email ? (
            <div>
              <img
                src={user?.photoURL || userIcon}
                alt="User Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          ) : (
            <img src={userIcon} alt="Default User" />
          )}
        </div>

        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn btn-neutral rounded-none px-10 bg-[#403F3F]"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral rounded-none px-10 bg-[#403F3F]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
