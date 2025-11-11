import React from "react";
import { AuthContext } from "../../context/"
import { useNavigate } from "react-router";
import { use } from "react";
//import { div } from "framer-motion/client";

const MyProfile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-violet-100">
      <title>Profile</title>
      <div className=" h-100 w-100 flex flex-col items-center justify-center bg-violet-500 border-6 rounded-xl border-violet-900 text-white p-6">
        <img
          src={user.photoURL || "https://via.placeholder.com/100"}
          alt="profile"
          className="w-30 h-30 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-white">
          {user.displayName}
        </h2>
        <p className="mb-2 text-white">{user.email}</p>
        <button
          className="bg-base-100 text-violet-900 font-bold mt-10 px-4 py-2 rounded hover:text-red-900"
          onClick={() => navigate("/profile/update")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};
export default MyProfile;
