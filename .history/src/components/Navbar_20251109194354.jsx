// import React from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../Context/AuthContext";
// import { use } from "react";
// import logo from "../assets/logo.jpg";

// const Navbar = () => {
//   const { user, logout } = use(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/");
//   };

//   return (
//     <nav className="bg-base-100 text-pink-800 font-bold p-4 flex justify-between items-center ">
//       <div className="flex justify-center items-center gap-4">
//               <img className="w-20 h-20 rounded-3xl" src={logo} alt="" />
//               <p className="text-pink-800 font-bold text-2xl">Fit~Track</p>
//       </div>

//       <div className="flex items-center gap-4">
//         <Link to="/" className="">
//           Home
//         </Link>
//         <Link to="/game/:id">Add Habits</Link>
//         <Link to="/game/:id">My Habits</Link>
//         {!user && (
//           <>
//             <Link to="/login" className="btn bg-pink-800 text-white">
//               Login
//             </Link>
//             <Link to="/register" className="btn bg-pink-800 text-white">
//               Register
//             </Link>
//           </>
//         )}
//         {user && (
//           <div className="flex items-center gap-2">
//             <img
//               src={user.photoURL || "https://via.placeholder.com/32"}
//               alt="profile"
//               className="w-8 h-8 rounded-full cursor-pointer"
//               onClick={() => navigate("/profile")}
//             />
//             <button
//               onClick={handleLogout}
//               className="btn btn-secondary px-2 py-1 rounded hover:bg-red-700"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start p-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-pink-800 text-white z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-models"}>
                <IoLogoModelS /> All Models
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Link
            to={"/"}
            className="flex items-center gap-1 text-xl font-bold text-pink-800"
          >
            Fit~Track
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className=" hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-10 text-pink-800 font-bold text-md">
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-models"}>
                <IoLogoModelS /> All Models
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add-model"}>
                <ImBoxAdd /> Add model
              </NavLink>
            </li>
            {/* 
          <li>
            <NavLink to={"/profile"}>
              <FaUser /> Profile
            </NavLink>
          </li> */}
          </ul>
        </div>

        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100  z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>
              <li>
                <a>
                  {" "}
                  <FaGear /> Settings
                </a>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn bg-pink-800 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/auth/login"} className="btn bg-pink-800 text-white">
            {" "}
            <IoLogIn /> Login
          </Link>
          <Link to={"/auth/register"}>Sign Up</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
