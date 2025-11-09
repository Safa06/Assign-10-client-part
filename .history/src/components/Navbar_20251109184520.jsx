import React from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { use } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-pink-800 text-white font-bold p-4 flex justify-between items-center">
      <img className="w-15 h-15 rounded-2xl" src={logo} alt="" />
      <div className="flex items-center gap-4">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/game/:id">Game</Link>
        {!user && (
          <>
            <Link to="/login" className="btn btn-neutral">
              Login
            </Link>
            <Link to="/register" className="btn btn-neutral">
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
