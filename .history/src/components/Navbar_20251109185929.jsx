import React from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { use } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-base-100 text-pink-800 font-bold p-2 flex justify-between items-center">
      <div className="flex justo">
              <img className="w-15 h-15 rounded-3xl" src={logo} alt="" />
              <p className="text-pink-800 font-bold text-2xl">Fit~Track</p>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/game/:id">Add Habits</Link>
        <Link to="/game/:id">My Habits</Link>
        {!user && (
          <>
            <Link to="/login" className="btn bg-pink-800 text-white">
              Login
            </Link>
            <Link to="/register" className="btn bg-pink-800 text-white">
              Register
            </Link>
          </>
        )}
        {user && (
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL || "https://via.placeholder.com/32"}
              alt="profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => navigate("/profile")}
            />
            <button
              onClick={handleLogout}
              className="btn btn-secondary px-2 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
